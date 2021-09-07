using Microsoft.AspNetCore.Authentication;

namespace Nimflow.Hub.WebApi.Services
{
    public class BasicAuthenticationSchemeOptions : AuthenticationSchemeOptions
    {
        public const string DefaultScheme = "Basic";
    }
}