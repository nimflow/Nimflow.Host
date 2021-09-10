using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Http;
using Nimflow.Hub.AspNet.Auth;

namespace Nimflow.Hub.WebApi.Settings
{
    [ExcludeFromCodeCoverage]
    public class ApiKeyAuthenticationSettings : SchemeAuthenticationSettings
    {
        public override string Scheme => ApiAuthenticationSchemeOptions.DefaultScheme;

        public override bool CanHandle(IHeaderDictionary requestHeaders)
        {
            return requestHeaders.ContainsKey("x-api-key");
        }
    }
}