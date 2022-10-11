using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using Newtonsoft.Json;
using Nimflow.Hub.WebApi.Settings;
using Nimflow.Orch.Application;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
    public static class JwtSecurityTokenExtensions
    {
        private static bool _settingsAlreadyLogged;

        public static IReadOnlyCollection<string> GetGrantedActions(this JwtSecurityToken jwtToken, BasicAuthenticationSettings settings, bool logActions)
        {
            if (settings == null)
                return Array.Empty<string>();
            var roleNames = GetRoleNames(jwtToken, settings, logActions);
            if (logActions)
            {
                Console.WriteLine($"RoleNames: {JsonConvert.SerializeObject(roleNames)}");
            }

            return roleNames != null
                ? roleNames.SelectMany(roleName => GetActionsByRole(roleName, settings, logActions)).Distinct().ToArray()
                : Array.Empty<string>();
        }

        private static IEnumerable<string> GetActionsByRole(string roleName, BasicAuthenticationSettings basicAuthenticationSettings, bool logActions)
        {
            var result = RoleActions.GetActionsByBuiltInRole(roleName);
            if (result is { Length: > 0 })
            {
                Console.Error.WriteLine($"GetActionsByRole built in found: {JsonConvert.SerializeObject(result)}");
                return result;
            }

            if (basicAuthenticationSettings.RoleActions == null || !basicAuthenticationSettings.RoleActions.TryGetValue(roleName, out var actions))
            {
                Console.Error.WriteLine("RoleActions not found");
                return Array.Empty<string>();
            }

            if (logActions)
                Console.WriteLine($"Actions from RoleActions settings: {JsonConvert.SerializeObject(actions ?? Array.Empty<string>())}");

            return actions ?? Array.Empty<string>();
        }


        public static IReadOnlyCollection<string> GetRoleNames(this JwtSecurityToken jwtToken, BasicAuthenticationSettings settings, bool logActions)
        {
            if (!_settingsAlreadyLogged && logActions)
            {
                Console.WriteLine(settings != null ? $"Auth settings: {JsonConvert.SerializeObject(settings)}" : "Null auth settings");
                _settingsAlreadyLogged = true;
            }

            if (settings?.ClaimRoleMappings == null || settings.ClaimRoleMappings.Length == 0)
                return Array.Empty<string>();
            var result = new List<string>();
            foreach (var claimRoleMapping in settings.ClaimRoleMappings.Where(s => s.ClaimType != null && s.ValuePropertyName != null && s.Roles != null))
            {
                result.AddRange(jwtToken.Claims.SelectMany(claim =>
                {
                    if (claim.Type != claimRoleMapping.ClaimType)
                        return Array.Empty<string>();
                    if (logActions)
                        Console.WriteLine($"Groups from token: {claim.Value}");
                    var claimData = JsonConvert.DeserializeObject<IDictionary<string, object>>(claim.Value);
                    if (claimData == null || !claimData.ContainsKey(claimRoleMapping.ValuePropertyName))
                        return Array.Empty<string>();
                    if (claimData[claimRoleMapping.ValuePropertyName] is string claimValue && claimRoleMapping.Roles.ContainsKey(claimValue))
                        return new[] { claimRoleMapping.Roles[claimValue] as string };
                    return Array.Empty<string>();
                }).ToArray());
            }

            return result;
        }
    }
}