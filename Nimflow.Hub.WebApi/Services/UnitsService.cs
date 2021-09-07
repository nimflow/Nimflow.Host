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
    public class UnitsService : IUnitsService
    {
        private readonly CustomBusinessDirectorySettings _settings;

        public UnitsService(CustomBusinessDirectorySettings settings)
        {
            _settings = settings;
        }

        public Task<string> Register(RegisterUnit request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Update(UpdateUnit request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(DeleteUnit request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Unit>> Search(SearchUnits query, CancellationToken cancellationToken)
        {
            if (_settings.Units == null)
                return Task.FromResult(Enumerable.Empty<Unit>());
            var result = _settings.Units.Select(cu => new Unit
            {
                Id = cu.Id,
                Name = cu.Name,
                OrganizationId = _settings.OrganizationId,
                Props = new Dictionary<string, string>
                {
                    {"hubApiUrl", _settings.BaseUrl},
                    {"studioAllowed", true.ToString()}
                }
            });
            result = result.Where(unit =>
                (query.Ids == null || query.Ids.Length == 0 || query.Ids.Contains(unit.Id))
                && (string.IsNullOrWhiteSpace(query.Name) || unit.Name == query.Name)
                && (string.IsNullOrWhiteSpace(query.OrganizationId) || query.OrganizationId == _settings.OrganizationId)
            );
            return Task.FromResult(result);
        }

        public Task<UpsertResult> SetUserRoles(SetUnitUserRolesCommand command, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<UnitUserRoles>> SearchUserRoles(SearchUnitUserRoles query, CancellationToken cancellationToken)
        {
            return Task.FromResult(Enumerable.Empty<UnitUserRoles>());
        }
    }
}