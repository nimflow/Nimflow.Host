using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Authentication.Negotiate;

namespace Nimflow.Hub.WebApi.Settings
{
    [ExcludeFromCodeCoverage]
    public class NegotiateAuthenticationSettings : SchemeAuthenticationSettings
    {
        public string LdapDomain { get; set; }
        public string MachineAccountName { get; set; }
        public string MachineAccountPassword { get; set; }
        public override string Scheme => NegotiateDefaults.AuthenticationScheme;
    }
}