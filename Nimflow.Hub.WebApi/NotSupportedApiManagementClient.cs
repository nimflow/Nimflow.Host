using System.Threading;
using System.Threading.Tasks;
using Nimflow.Orch.Application.ApiManagement;

namespace Nimflow.Hub.WebApi
{
    public class NotSupportedApiManagementClient: IApiManagementClient
    {
        public Task<string> GetUnitSubscriptionKey(CancellationToken ct)
        {
            return null;
        }
    }
}