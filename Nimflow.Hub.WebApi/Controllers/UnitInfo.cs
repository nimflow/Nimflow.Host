using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ExcludeFromCodeCoverage]
    public class UnitInfo
    {
        [Required] public string Id { get; set; }
        [Required] public string Name { get; set; }
        public string Description { get; set; }
        [Required] public string OrganizationId { get; set; }
        [Required] public string OrganizationName { get; set; }
        [Required] public IDictionary<string, string> Props;
    }
}