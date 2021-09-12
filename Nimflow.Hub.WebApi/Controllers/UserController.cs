using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Nimflow.Hub.AspNet.Auth;
using Nimflow.Hub.WebApi.Services;
using Nimflow.Hub.WebApi.Settings;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IBasicAuthProvider _basicAuthProvider;
        private readonly ILogger<UserController> _logger;
        private readonly IOptionsSnapshot<BasicAuthenticationSettings> _basicAuthenticationOptionsSnapshot;
        private readonly IBusinessDirectoryAccessControlService _bdAccessControlService;

        public UserController(IBasicAuthProvider basicAuthProvider, ILogger<UserController> logger, IOptionsSnapshot<BasicAuthenticationSettings> basicAuthenticationOptionsSnapshot, IBusinessDirectoryAccessControlService bdAccessControlService)
        {
            _basicAuthProvider = basicAuthProvider;
            _logger = logger;
            _basicAuthenticationOptionsSnapshot = basicAuthenticationOptionsSnapshot;
            _bdAccessControlService = bdAccessControlService;
        }

        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<UserInfo> Authenticate(AuthenticationRequest request, CancellationToken ct)
        {
            try
            {
                var credential = Convert.ToBase64String(Encoding.UTF8.GetBytes($"{request.Username}:{request.Password}"));
                var securityToken = await _basicAuthProvider.Authenticate(credential, ct);
                if (securityToken != null)
                    return CreateUserInfo(securityToken, request.Username);
            }
            catch (Exception e)
            {
                _logger.LogWarning($"Error trying to authenticate {request.Username} with message: {e.Message}");
                throw new UnauthorizedAccessException();
            }

            throw new UnauthorizedAccessException();
        }

        private UserInfo CreateUserInfo(JwtSecurityToken securityToken, string username)
        {
            return new UserInfo
            {
                Name = username,
                Email = securityToken.Claims.FirstOrDefault(s => s.Type.ToLowerInvariant() == "email")?.Value,
                GrantActions = securityToken.GetGrantedActions(_basicAuthenticationOptionsSnapshot.Value)?.ToArray() ?? Array.Empty<string>()
            };
        }

        public class UserInfo
        {
            // ReSharper disable UnusedAutoPropertyAccessor.Global
            public string Name { get; set; }

            public string Email { get; set; }

            public string[] GrantActions { get; set; }
            // ReSharper restore UnusedAutoPropertyAccessor.Global
        }
    }
}