using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Nimflow.Hub.WebApi.Settings;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [AllowAnonymous]
    public class AuthController : ControllerBase
    {
        private readonly IOptionsSnapshot<AuthenticationSettings> _authenticationOptionsSnapshot;

        public AuthController(IOptionsSnapshot<AuthenticationSettings> authenticationOptionsSnapshot)
        {
            _authenticationOptionsSnapshot = authenticationOptionsSnapshot;
        }

        [HttpGet("[action]")]
        public IEnumerable<string> SupportedSchemes()
        {
            var settings = _authenticationOptionsSnapshot.Value;
            return settings != null
                ? settings.GetEnabledSchemeAuthenticationSettings().Select(s => s.Scheme)
                : Array.Empty<string>();
        }

        [HttpGet("[action]")]
        public BearerSchemePublicSettings BearerSchemeSettings()
        {
            var settings = _authenticationOptionsSnapshot.Value;
            if (settings?.Bearer is not { Enabled: true, Audience: { }, Authority: { } })
                return new BearerSchemePublicSettings
                {
                    Supported = false
                };
            return new BearerSchemePublicSettings
            {
                Supported = true,
                Audience = settings.Bearer.Audience,
                Authority = settings.Bearer.Authority
            };
        }

        public class BearerSchemePublicSettings
        {
            public string Authority { get; set; }
            public string Audience { get; set; }
            public bool Supported { get; set; }
        }
    }
}