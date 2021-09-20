using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Nimflow.BusinessDirectory.Queries;
using Nimflow.Hub.WebApi.Controllers;
using Nimflow.Hub.WebApi.Services;
using Xunit;

namespace Nimflow.Hub.WebApi.Tests
{
    public class ControllersTest : ServerFixtureTest
    {
        public ControllersTest(ServerFixture fixture) : base(fixture)
        {
        }

        private Task<HttpResponseMessage> PostAsJson(string path, object value)
        {
            RunAsAutomation();
            var request = Fixture.Server.CreateRequest(path).And(message =>
            {
                message.Content = new StringContent(JsonConvert.SerializeObject(value), Encoding.Default, "application/json");
            });
            return request.PostAsync();
        }

        //[Fact]
        //public async Task UserAuthenticateResponseMustBeNull()
        //{
        //    var response = await PostAsJson("/user/authenticate", new AuthenticationRequest
        //    {
        //        Username = "string",
        //        Password = "string"
        //    });
        //    Assert.Equal(HttpStatusCode.NoContent, response.StatusCode);
        //}

        [Fact]
        public async Task UserSessionGetUnitsShouldBeUnauthorized()
        {
            var response = await PostAsJson("/usersession/getunits", new GetCurrentUserUnits());
            Assert.Equal(HttpStatusCode.Unauthorized, response.StatusCode);
        }
    }
}