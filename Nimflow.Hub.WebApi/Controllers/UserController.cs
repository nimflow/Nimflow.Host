using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nimflow.Hub.WebApi.Services;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IBasicAuthProvider _basicAuthProvider;
        private readonly ILogger<UserController> _logger;

        public UserController(IBasicAuthProvider basicAuthProvider, ILogger<UserController> logger)
        {
            _basicAuthProvider = basicAuthProvider;
            _logger = logger;
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

        private static UserInfo CreateUserInfo(JwtSecurityToken securityToken, string username)
        {
            return new UserInfo
            {
                Name = username,
                Email = securityToken.Claims.FirstOrDefault(s => s.Type.ToLowerInvariant() == "email")?.Value
            };
        }

        public class UserInfo
        {
            // ReSharper disable UnusedAutoPropertyAccessor.Global
            public string Name { get; set; }

            public string Email { get; set; }
            // ReSharper restore UnusedAutoPropertyAccessor.Global
        }
    }
}