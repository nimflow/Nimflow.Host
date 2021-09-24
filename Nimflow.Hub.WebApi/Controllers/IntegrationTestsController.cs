using System;
using System.Diagnostics.CodeAnalysis;
using System.Drawing;
using System.Threading;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [ExcludeFromCodeCoverage]
    public class IntegrationTestsController : ControllerBase
    {
        private const string TiffBase64 =
            "SUkqAL4CAACAP+BACCQWDQeEQmFQuGQ2HQ+IRGJROKQ6BP+KxmNRuOR2PR+CxeQSOSSWTSeESKUSuWS2XQmVS+ZTOaRyYzWcTmdSmBzufT+aTegUOiSShUWkUmK0elU2nQumUh8qtXPqqAYqlID1mn0iozt9sBhPU9H9/ONyQUAgcDhBqs21geu0CvzWwsJ6Gs4v95PKEAcnEwFpVH3OiXWX1NXPZAIW+X6D4AmApHIi44ah4iVvdHJJ7o9JwsEF0sgpDIKEYrPpOz2mkAIOhwEnE21spTLNSV8KNTvY9H7MSO4gpDoLbS3cx+73m933gyXh8Xjyfkxvl3rHyXJZTLWyfvdKpl7ohGQjo8auUaeyt4DIdP51uuEaPS6fnxPweLyea2BFuGokrqoou55i6Mb5tI0zUPujT8vG8qDgWRxEumj0BIm9r3vihAJHGbcGJAd4SBYf58nytT+v+kELoe3bet/BD6wXECOwc/aDgSPA6ASNYzo7FiHQy+D5IIyTBsLGiSnsQJCnwThQRQA7iPQ26MyAhp3A6EqEP8ajLySo0THgFYZxLE6CLjLqNSuhksy2g8Ow/MDNvDB8OQ9Nb1pBN07zlOaWT5OE8StPSP0Cg04z+ltDoLRNCIwklGIJR1FJRSQAUoik2IXEUSRMgscx3HtKpNS9MonTaFSXJsnyjNVSI4u6yLMtE+zzSCRzNTtbVgirruayCDSMwlb0tLVeV6htZLK1qFu2ysvqXQqR0vCUKPTZIANU0Fmoa+kFRXacQxHM0oynCrg2XWjXIrb77PVXCSxtCCDLiBI/j2+iiXVbqPXdGaUVSh95oc2DZNpdCOW21lapPZ7urkoNxJPgle3+pOBU1EzfD+fJVFaueLvvjKP4qleH2jZOSWzlWJ5Zl6IZXmFK5lmc/5rm0wZxnMaZ3nkGZ9n7noCADwD+AAQAAQAAAAAAAAAAAQQAAQAAAD4AAAABAQQAAQAAAC8AAAACAQMAAwAAAHgDAAADAQMAAQAAAAUAAAAGAQMAAQAAAAIAAAARAQQAAQAAAAgAAAAVAQMAAQAAAAMAAAAWAQQAAQAAAC8AAAAXAQQAAQAAALYCAAAaAQUAAQAAAH4DAAAbAQUAAQAAAIYDAAAcAQMAAQAAAAEAAAAoAQMAAQAAAAIAAAA9AQMAAQAAAAIAAAAAAAAACAAIAAgAAHcBAOgDAAAAdwEA6AMAAA==";

        [HttpGet("[action]")]
        [AllowAnonymous]
        public string Images(CancellationToken ct)
        {
            var image = (Bitmap)new ImageConverter().ConvertFrom(Convert.FromBase64String(TiffBase64));
            if (image == null)
                throw new ApplicationException("Null image");
            if (image.Size.IsEmpty)
                throw new ApplicationException("Empty image");
            return "ok";
        }
    }
}