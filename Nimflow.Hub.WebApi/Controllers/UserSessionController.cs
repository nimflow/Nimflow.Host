using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nimflow.BusinessDirectory;
using Nimflow.BusinessDirectory.Queries;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Authorize]
    public class UserSessionController : ControllerBase
    {
        private readonly IUnitsService _unitsService;

        public UserSessionController(IUnitsService unitsService)
        {
            _unitsService = unitsService;
        }

        [HttpPost("[action]")]
        public async Task<IEnumerable<UnitInfo>> GetUnits(GetCurrentUserUnits query, CancellationToken ct)
        {
            var units = await _unitsService.Search(new SearchUnits(), ct);
            return units.Select(unit => new UnitInfo
            {
                Id = unit.Id,
                Name = unit.Name,
                Description = unit.Description,
                OrganizationId = unit.OrganizationId,
                Props = unit.Props ?? new Dictionary<string, string>()
            });
        }
    }
}