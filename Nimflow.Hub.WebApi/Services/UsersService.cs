using System;
using System.Threading;
using System.Threading.Tasks;
using Nimflow.BusinessDirectory;
using Nimflow.BusinessDirectory.Commands;

namespace Nimflow.Hub.WebApi.Services
{
    public class UsersService : IUsersService
    {
        public Task<string> Register(RegisterUser request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<User> FindById(string id, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<User> FindByEmail(string emailAddress, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}