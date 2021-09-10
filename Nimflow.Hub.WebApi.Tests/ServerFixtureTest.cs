using Microsoft.Extensions.DependencyInjection;
using Nimflow.ExecutionContext;
using Xunit;

namespace Nimflow.Hub.WebApi.Tests
{
    public abstract class ServerFixtureTest : IClassFixture<ServerFixture>
    {
        protected ServerFixture Fixture { get; }

        protected ServerFixtureTest(ServerFixture fixture)
        {
            Fixture = fixture;
        }

        protected void RunAsAutomation()
        {
            var executionContext = Fixture.Server.Services.GetRequiredService<IExecutionContext>();
            executionContext.AutomationRunning = true;
        }

        protected T GetRequiredService<T>()
        {
            return Fixture.Server.Services.GetRequiredService<T>();
        }
    }
}