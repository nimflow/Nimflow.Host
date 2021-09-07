using Microsoft.AspNetCore.Http;

namespace Nimflow.Hub.WebApi.Settings
{
    public abstract class SchemeAuthenticationSettings
    {
        public abstract string Scheme { get; }
        public bool Enabled { get; set; }

        public virtual bool CanHandle(IHeaderDictionary requestHeaders)
        {
            return true;
        }
    }
}