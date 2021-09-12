using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using Newtonsoft.Json;
using Nimflow.Hub.WebApi.Settings;
using Nimflow.Orch.Application;

namespace Nimflow.Hub.WebApi.Services
{
    public static class JwtSecurityTokenExtensions
    {
        public static IReadOnlyCollection<string> GetGrantedActions(this JwtSecurityToken jwtToken, BasicAuthenticationSettings settings)
        {
            if (settings == null)
                return Array.Empty<string>();
            var roleNames = GetRoleNames(jwtToken, settings);
            return roleNames != null 
                ? roleNames.SelectMany(RoleActions.GetActionsByRole).Distinct().ToArray()
                : Array.Empty<string>();
        }

        public static IReadOnlyCollection<string> GetRoleNames(this JwtSecurityToken jwtToken, BasicAuthenticationSettings settings)
        {
            if (settings?.ClaimRoleMappings == null || settings.ClaimRoleMappings.Length == 0)
                return Array.Empty<string>();
            var result = new List<string>();
            foreach (var claimRoleMapping in settings.ClaimRoleMappings.Where(s => s.ClaimType != null && s.ValuePropertyName != null && s.Roles != null))
            {
                result.AddRange(jwtToken.Claims.SelectMany(claim =>
                {
                    if (claim.Type != claimRoleMapping.ClaimType)
                        return Array.Empty<string>();
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