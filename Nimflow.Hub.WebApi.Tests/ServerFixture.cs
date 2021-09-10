using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Nimflow.ExecutionContext;

namespace Nimflow.Hub.WebApi.Tests
{
    public class ServerFixture : IDisposable
    {
        public readonly TestServer Server;

        public ServerFixture()
        {
            var builder = new WebHostBuilder()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseEnvironment("Development")
                .UseConfiguration(new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.IntegrationTests.json")
                    .Build()).UseStartup<Startup>();
            Server = new TestServer(builder);
            var executionContext = Server.Services.GetRequiredService<IExecutionContext>();
            executionContext.AutomationRunning = true;
        }

        public void Dispose()
        {
            Server.Dispose();
        }
    }
}