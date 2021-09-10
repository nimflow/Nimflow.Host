using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text.Encodings.Web;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Nimflow.Hub.AspNet.Auth;
using Nimflow.Hub.WebApi.Settings;
using Nimflow.Orch.Application;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
    public class BasicAuthenticationHandler : AuthenticationHandler<BasicAuthenticationSchemeOptions>
    {
        private readonly IBasicAuthProvider _provider;
        private readonly IOptionsSnapshot<BasicAuthenticationSettings> _optionsSnapshot;

        public BasicAuthenticationHandler(
            IBasicAuthProvider provider,
            IOptionsMonitor<BasicAuthenticationSchemeOptions> options,
            ILoggerFactory logger,
            UrlEncoder encoder,
            IOptionsSnapshot<BasicAuthenticationSettings> optionsSnapshot,
            ISystemClock clock)
            : base(options, logger, encoder, clock)
        {
            _provider = provider;
            _optionsSnapshot = optionsSnapshot;
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            var endpoint = Context.GetEndpoint();
            if (endpoint?.Metadata.GetMetadata<IAllowAnonymous>() != null)
                return AuthenticateResult.NoResult();

            if (!Request.Headers.ContainsKey("Authorization"))
                return AuthenticateResult.Fail("Missing Authorization Header");
            var settings = _optionsSnapshot.Value;
            try
            {
                var authHeader = AuthenticationHeaderValue.Parse(Request.Headers["Authorization"]);
                if (authHeader.Scheme.ToLower() != "basic")
                    return AuthenticateResult.NoResult();
                var credentialString = authHeader.Parameter;
                if (credentialString == null)
                    return AuthenticateResult.Fail("Missing Authorization Header Value");
                var jwtToken = await _provider.Authenticate(credentialString, CancellationToken.None);
                if (jwtToken == null)
                    return AuthenticateResult.Fail("Invalid Username or Password");
                var identity = new ClaimsIdentity(GetActualClaims(jwtToken), Scheme.Name, settings.NameType ?? "Email", null);
                var principal = new ClaimsPrincipal(identity);
                var ticket = new AuthenticationTicket(principal, Scheme.Name);
                return AuthenticateResult.Success(ticket);
            }
            catch (Exception e)
            {
                return AuthenticateResult.Fail($"Authentication failed. {e.Message}");
            }
        }

        private IEnumerable<Claim> GetActualClaims(JwtSecurityToken jwtToken)
        {
            var settings = _optionsSnapshot.Value;
            if (settings.ClaimRoleMappings == null)
                return jwtToken.Claims;
            var result = new List<Claim>(jwtToken.Claims);
            var grantedActions = GetGrantedAction(GetRoleNames(jwtToken, settings));
            if (grantedActions.Count > 0)
                result.Add(new Claim(AuthConstants.GrantActionsType, string.Join(';', grantedActions)));
            return result;
        }

        private static IReadOnlyCollection<string> GetGrantedAction(IReadOnlyCollection<string> roleNames)
        {
            return roleNames != null 
                ? roleNames.SelectMany(RoleActions.GetActionsByRole).Distinct().ToArray()
                : Array.Empty<string>();
        }

        private static IReadOnlyCollection<string> GetRoleNames(JwtSecurityToken jwtToken, BasicAuthenticationSettings settings)
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