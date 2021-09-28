//using System;
//using System.IO;
//using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.TestHost;
//using Microsoft.Extensions.Configuration;

//namespace Nimflow.Hub.WebApi.Tests
//{
//    public class ServerFixture : IDisposable
//    {
//        private static TestServer _server;

//        private static readonly object Rwlock = new();

//        public TestServer Server
//        {
//            get
//            {
//                lock (Rwlock)
//                {
//                    return _server ??= BuildTestServer();
//                }
//            }
//        }

//        public void Dispose()
//        {
//            //Server.Dispose();
//        }

//        private static TestServer BuildTestServer()
//        {
//            var builder = new WebHostBuilder()
//                .UseContentRoot(Directory.GetCurrentDirectory())
//                .UseEnvironment("Development")
//                .UseConfiguration(new ConfigurationBuilder()
//                    .SetBasePath(Directory.GetCurrentDirectory())
//                    .AddJsonFile("appsettings.IntegrationTests.json")
//                    .Build()).UseStartup<Startup>();
//            return new TestServer(builder);
//        }
//    }
//}