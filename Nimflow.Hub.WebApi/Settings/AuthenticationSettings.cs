using System.Collections.Generic;
using System.Linq;

namespace Nimflow.Hub.WebApi.Settings
{
    public class AuthenticationSettings
    {
        public string DefaultScheme { get; set; }
        public string DefaultChallengeScheme { get; set; }
        public ApiKeyAuthenticationSettings ApiKey { get; set; }
        public BearerAuthenticationSettings Bearer { get; set; }
        public BasicAuthenticationSettings Basic { get; set; }
        public NegotiateAuthenticationSettings Negotiate { get; set; }

        public IEnumerable<SchemeAuthenticationSettings> GetEnabledSchemaAuthenticationSettings()
        {
            return new SchemeAuthenticationSettings[] {Basic, ApiKey, Bearer, Negotiate}.Where(s => s is {Enabled: true});
        }
    }
}