using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IdentityModel.Tokens.Jwt;
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
using Nimflow.Hub.AspNet.Auth;
using Nimflow.Hub.WebApi.Settings;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
    public class BasicAuthenticationHandler : AuthenticationHandler<BasicAuthenticationSchemeOptions>
    {
        private readonly IOptionsSnapshot<BasicAuthenticationSettings> _optionsSnapshot;
        private readonly IBasicAuthProvider _provider;

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
            var grantedActions = jwtToken.GetGrantedActions(settings);
            if (grantedActions.Count > 0)
                result.Add(new Claim(AuthConstants.GrantActionsType, string.Join(';', grantedActions)));
            return result;
        }
    }
}