using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace Nimflow.Hub.WebApi.Settings
{
    public class BearerAuthenticationSettings : SchemeAuthenticationSettings
    {
        public string Authority { get; set; }
        public string Audience { get; set; }
        public override string Scheme => JwtBearerDefaults.AuthenticationScheme;
    }
}