using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Nimflow.Hub.AspNet.Auth;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
    public class FromIdentityBusinessDirectoryAccessControlService : IBusinessDirectoryAccessControlService
    {
        private readonly IHttpContextAccessor _httpContextAccessor;

        public FromIdentityBusinessDirectoryAccessControlService(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<bool> ActionGranted(string action, CancellationToken ct)
        {
            var grantedActions = await GetGrantedActions(ct);
            ct.ThrowIfCancellationRequested();
            return grantedActions.Contains(action);
        }

        public async Task<bool> AnyGranted(string[] actions, CancellationToken ct)
        {
            var grantedActions = await GetGrantedActions(ct);
            ct.ThrowIfCancellationRequested();
            return actions.Any(action => grantedActions.Contains(action));
        }

        public async Task<bool> AllGranted(string[] actions, CancellationToken ct)
        {
            var grantedActions = await GetGrantedActions(ct);
            ct.ThrowIfCancellationRequested();
            return actions.All(action => grantedActions.Contains(action));
        }

        public Task<IEnumerable<string>> GetGrantedActions(CancellationToken ct)
        {
            var actions = GetGrantActionsFromIdentity();
            return Task.FromResult(actions);
        }

        private IEnumerable<string> GetGrantActionsFromIdentity()
        {
            var claim = _httpContextAccessor.HttpContext?.User?.Claims.FirstOrDefault(claim => claim.Type == AuthConstants.GrantActionsType);
            return claim?.Value != null ? claim.Value.Split(';') : Array.Empty<string>();
        }
    }
}