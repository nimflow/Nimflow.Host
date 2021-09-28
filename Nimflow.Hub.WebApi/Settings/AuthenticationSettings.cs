using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace Nimflow.Hub.WebApi.Settings
{
    [ExcludeFromCodeCoverage]
    public class AuthenticationSettings
    {
        public ApiKeyAuthenticationSettings ApiKey { get; set; }
        public BearerAuthenticationSettings Bearer { get; set; }
        public BasicAuthenticationSettings Basic { get; set; }
        public NegotiateAuthenticationSettings Negotiate { get; set; }

        public IEnumerable<SchemeAuthenticationSettings> GetEnabledSchemeAuthenticationSettings()
        {
            return new SchemeAuthenticationSettings[] { ApiKey, Basic, Bearer, Negotiate }.Where(s => s is { Enabled: true });
        }
    }
}