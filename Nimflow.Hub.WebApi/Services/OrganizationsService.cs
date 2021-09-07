using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Nimflow.BusinessDirectory;
using Nimflow.BusinessDirectory.Commands;
using Nimflow.BusinessDirectory.Queries;

namespace Nimflow.Hub.WebApi.Services
{
    public class OrganizationsService : IOrganizationsService
    {
        private readonly CustomBusinessDirectorySettings _settings;

        public OrganizationsService(CustomBusinessDirectorySettings settings)
        {
            _settings = settings;
        }

        public async Task<Organization> FindById(string id, CancellationToken cancellationToken)
        {
            return (await Search(new SearchOrganizations(), cancellationToken)).FirstOrDefault(s => s.Id == id);
        }

        public Task<bool> Update(UpdateOrganization request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<string> Register(RegisterOrganization request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<bool> Delete(DeleteOrganization request, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Organization>> Search(SearchOrganizations request, CancellationToken cancellationToken)
        {
            IEnumerable<Organization> organizations = new[]
            {
                new Organization
                {
                    Id = _settings.OrganizationId,
                    Name = _settings.OrganizationName
                }
            };
            return Task.FromResult(organizations);
        }
    }
}