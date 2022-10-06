using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Dynamic;
using Nimflow.Hub.WebApi.Services;

namespace Nimflow.Hub.WebApi.Settings
{
    [ExcludeFromCodeCoverage]
    public class BasicAuthenticationSettings : SchemeAuthenticationSettings
    {
        //public HttpBasicAuthProviderSettings HttpBasicAuthProvider { get; set; }
        public override string Scheme => BasicAuthenticationSchemeOptions.DefaultScheme;

        public string NameType { get; set; }

        public ClaimRolesMapping[] ClaimRoleMappings { get; set; }
        public IDictionary<string, string[]> RoleActions { get; set; } = new Dictionary<string, string[]>();

        public class ClaimRolesMapping
        {
            public string ClaimType { get; set; }
            public string ValuePropertyName { get; set; }
            public IDictionary<string, object> Roles { get; set; } = new ExpandoObject();
        }
    }
}