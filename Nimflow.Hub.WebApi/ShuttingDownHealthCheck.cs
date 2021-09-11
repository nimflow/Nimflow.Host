using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Nimflow.Hub.WebApi
{
    public class ShuttingDownHealthCheck : IHealthCheck
    {
        private HealthStatus _status = HealthStatus.Healthy;

        public ShuttingDownHealthCheck(IHostApplicationLifetime appLifetime, IHostEnvironment hostEnvironment, ILogger<ShuttingDownHealthCheck> logger)
        {
            appLifetime.ApplicationStopping.Register(() =>
            {
                _status = HealthStatus.Unhealthy;
                var delayShutdown = hostEnvironment.IsProduction();
                if (!delayShutdown) 
                    return;
                var delay = TimeSpan.FromSeconds(40);
                logger.LogInformation($"Delaying shutdown for {delay.TotalSeconds} seconds.");
                Thread.Sleep(delay);
                logger.LogInformation("Shutdown delay completed");
            });
        }

        public Task<HealthCheckResult> CheckHealthAsync(HealthCheckContext context, CancellationToken cancellationToken = default)
        {
            var result = new HealthCheckResult(_status, _status == HealthStatus.Unhealthy ? "Shutting down" : null);
            return Task.FromResult(result);
        }
    }
}