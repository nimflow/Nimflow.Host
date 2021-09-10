using System.Diagnostics.CodeAnalysis;
using Microsoft.AspNetCore.Http;

namespace Nimflow.Hub.WebApi.Settings
{
    [ExcludeFromCodeCoverage]
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