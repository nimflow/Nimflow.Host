using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Authentication;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
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