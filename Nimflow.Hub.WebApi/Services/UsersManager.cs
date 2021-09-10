using System.Diagnostics.CodeAnalysis;
using System.Threading;
using System.Threading.Tasks;
using Nimflow.Users;
using Nimflow.Users.Commands;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
    public class UsersManager : IUsersManager
    {
        public Task<InviteUsersOrRequestToVerifyEmailsResult> InviteUsersOrRequestToVerifyEmails(UserAppsInvitation[] emails, CancellationToken ct)
        {
            //TODO: Probably unnecessary
            return Task.FromResult(new InviteUsersOrRequestToVerifyEmailsResult());
        }
    }
}