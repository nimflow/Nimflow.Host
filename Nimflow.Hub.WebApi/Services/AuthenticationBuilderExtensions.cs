using System;
using Microsoft.AspNetCore.Authentication;

namespace Nimflow.Hub.WebApi.Services
{
    public static class AuthenticationBuilderExtensions
    {
        public static AuthenticationBuilder AddBasic(
            this AuthenticationBuilder authenticationBuilder,
            Action<BasicAuthenticationSchemeOptions> options)
        {
            return authenticationBuilder.AddScheme<BasicAuthenticationSchemeOptions, BasicAuthenticationHandler>("Basic", options);
        }
    }
}