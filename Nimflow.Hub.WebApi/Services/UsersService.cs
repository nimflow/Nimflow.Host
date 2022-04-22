using System;
using System.Diagnostics.CodeAnalysis;
using System.Threading;
using System.Threading.Tasks;
using Nimflow.BusinessDirectory;
using Nimflow.BusinessDirectory.Commands;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
    public class UsersService : IUsersService
    {
        public Task<string> Register(RegisterUser request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<User> FindById(string id, CancellationToken cancellationToken)
        {
            return Task.FromResult(new User
            {
                Id = id,
                EmailVerified = false
            });
        }

        public Task<User> FindByEmail(string emailAddress, CancellationToken cancellationToken)
        {
            return Task.FromResult(new User
            {
                Email = emailAddress,
                EmailVerified = true
            });
        }
    }
}