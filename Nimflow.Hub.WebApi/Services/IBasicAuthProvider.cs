using System.IdentityModel.Tokens.Jwt;
using System.Threading;
using System.Threading.Tasks;

namespace Nimflow.Hub.WebApi.Services
{
    public interface IBasicAuthProvider
    {
        public Task<JwtSecurityToken> Authenticate(string credential, CancellationToken ct);
    }
}