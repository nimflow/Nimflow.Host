using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Threading;
using System.Threading.Tasks;
using Nimflow.Hub.AspNet.Auth;
using Nimflow.Orch.Application;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
    public class BusinessDirectoryAccessControlService : IBusinessDirectoryAccessControlService
    {
        public Task<bool> ActionGranted(string action, CancellationToken ct)
        {
            //TODO:
            return Task.FromResult(true);
        }

        public Task<bool> AnyGranted(string[] actions, CancellationToken ct)
        {
            //TODO:
            return Task.FromResult(true);
        }

        public Task<bool> AllGranted(string[] actions, CancellationToken ct)
        {
            //TODO:
            return Task.FromResult(true);
        }

        public Task<IEnumerable<string>> GetGrantedActions(CancellationToken ct)
        {
            //TODO:
            IEnumerable<string> actions = RoleActions.GetActionsByRole("Owner");
            return Task.FromResult(actions);
        }
    }
}