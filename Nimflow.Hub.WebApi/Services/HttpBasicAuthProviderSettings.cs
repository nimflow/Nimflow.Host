using System;
using System.Diagnostics.CodeAnalysis;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
    public class HttpBasicAuthProviderSettings
    {
        public string AuthorizeUrl { get; set; }
        public string Application { get; set; }
        public PropertiesMapping PropertiesMap { get; set; }
        public Header[] Headers { get; set; } = Array.Empty<Header>();

        public class Header
        {
            public string Name { get; set; }
            public string Value { get; set; }
        }

        public class PropertiesMapping
        {
            public string Application { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
        }
    }
}