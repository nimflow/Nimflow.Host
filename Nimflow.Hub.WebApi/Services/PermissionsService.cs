using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Nimflow.BusinessDirectory;
using Nimflow.BusinessDirectory.Commands;
using Nimflow.BusinessDirectory.Queries;
using Nimflow.Common;

namespace Nimflow.Hub.WebApi.Services
{
    public class PermissionsService : IPermissionsService
    {
        public Task<UpdateResult> Grant(GrantPermission request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<UpdateResult> Deny(DenyPermission request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<UpdateResult> Set(SetPermissions request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<PermissionData>> Search(SearchPermissions request, CancellationToken cancellationToken)
        {
            return Task.FromResult(Enumerable.Empty<PermissionData>());
        }

        public Task<bool> Any(AnyPermission request, CancellationToken cancellationToken)
        {
            return Task.FromResult(false);
        }

        public Task<IEnumerable<User>> SearchEntityUsers(SearchEntityUsers query, CancellationToken cancellationToken)
        {
            return Task.FromResult(Enumerable.Empty<User>());
        }
    }
}