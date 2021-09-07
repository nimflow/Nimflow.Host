using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nimflow.Hub.WebApi.Services;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IBasicAuthProvider _basicAuthProvider;

        public UserController(IBasicAuthProvider basicAuthProvider)
        {
            _basicAuthProvider = basicAuthProvider;
        }

        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<JwtSecurityToken> Authenticate(AuthenticationRequest request, CancellationToken ct)
        {
            var credential = Convert.ToBase64String(Encoding.UTF8.GetBytes($"{request.Username}:{request.Password}"));
            return await _basicAuthProvider.Authenticate(credential, ct);
        }
    }
}