using System;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Nimflow.BlobStorage;
using Nimflow.BusinessDirectory;
using Nimflow.BusinessDirectory.Queries;
using Nimflow.ExecutionContext;
using Nimflow.Images;
using Nimflow.Orch.Application;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [ExcludeFromCodeCoverage]
    public class IntegrationTestsController : ControllerBase
    {
        private const string TiffBase64 =
            "SUkqAL4CAACAP+BACCQWDQeEQmFQuGQ2HQ+IRGJROKQ6BP+KxmNRuOR2PR+CxeQSOSSWTSeESKUSuWS2XQmVS+ZTOaRyYzWcTmdSmBzufT+aTegUOiSShUWkUmK0elU2nQumUh8qtXPqqAYqlID1mn0iozt9sBhPU9H9/ONyQUAgcDhBqs21geu0CvzWwsJ6Gs4v95PKEAcnEwFpVH3OiXWX1NXPZAIW+X6D4AmApHIi44ah4iVvdHJJ7o9JwsEF0sgpDIKEYrPpOz2mkAIOhwEnE21spTLNSV8KNTvY9H7MSO4gpDoLbS3cx+73m933gyXh8Xjyfkxvl3rHyXJZTLWyfvdKpl7ohGQjo8auUaeyt4DIdP51uuEaPS6fnxPweLyea2BFuGokrqoou55i6Mb5tI0zUPujT8vG8qDgWRxEumj0BIm9r3vihAJHGbcGJAd4SBYf58nytT+v+kELoe3bet/BD6wXECOwc/aDgSPA6ASNYzo7FiHQy+D5IIyTBsLGiSnsQJCnwThQRQA7iPQ26MyAhp3A6EqEP8ajLySo0THgFYZxLE6CLjLqNSuhksy2g8Ow/MDNvDB8OQ9Nb1pBN07zlOaWT5OE8StPSP0Cg04z+ltDoLRNCIwklGIJR1FJRSQAUoik2IXEUSRMgscx3HtKpNS9MonTaFSXJsnyjNVSI4u6yLMtE+zzSCRzNTtbVgirruayCDSMwlb0tLVeV6htZLK1qFu2ysvqXQqR0vCUKPTZIANU0Fmoa+kFRXacQxHM0oynCrg2XWjXIrb77PVXCSxtCCDLiBI/j2+iiXVbqPXdGaUVSh95oc2DZNpdCOW21lapPZ7urkoNxJPgle3+pOBU1EzfD+fJVFaueLvvjKP4qleH2jZOSWzlWJ5Zl6IZXmFK5lmc/5rm0wZxnMaZ3nkGZ9n7noCADwD+AAQAAQAAAAAAAAAAAQQAAQAAAD4AAAABAQQAAQAAAC8AAAACAQMAAwAAAHgDAAADAQMAAQAAAAUAAAAGAQMAAQAAAAIAAAARAQQAAQAAAAgAAAAVAQMAAQAAAAMAAAAWAQQAAQAAAC8AAAAXAQQAAQAAALYCAAAaAQUAAQAAAH4DAAAbAQUAAQAAAIYDAAAcAQMAAQAAAAEAAAAoAQMAAQAAAAIAAAA9AQMAAQAAAAIAAAAAAAAACAAIAAgAAHcBAOgDAAAAdwEA6AMAAA==";

        private readonly IBlobStorageService _blobStorageService;
        private readonly IUnitSession _unitSession;
        private readonly IUnitsService _unitsService;
        private readonly IMediator _mediator;
        private readonly IExecutionContext _executionContext;
        private readonly ILogger<IntegrationTestsController> _logger;

        public IntegrationTestsController(
            IBlobStorageService blobStorageService, 
            IUnitSession unitSession, 
            IUnitsService unitsService, 
            IMediator mediator, 
            IExecutionContext executionContext,
            ILogger<IntegrationTestsController> logger
            )
        {
            _blobStorageService = blobStorageService;
            _unitSession = unitSession;
            _unitsService = unitsService;
            _mediator = mediator;
            _executionContext = executionContext;
            _logger = logger;
        }

        [HttpGet("[action]")]
        [AllowAnonymous]
        public async Task<IActionResult> Images(CancellationToken ct)
        {
            var units = await _unitsService.Search(new SearchUnits(), ct);
            var unit = units.FirstOrDefault();
            if (unit == null)
                throw new ApplicationException("Units are empty");
            _unitSession.SetUnitId(unit.Id);

            var storagePath = "IntegrationTests/";
            var file1Name = "file1.tiff";
            var file1Path = $"{storagePath}/{file1Name}";
            var file2Name = "sample-multipage.tif";
            var file2LocalPath = $"images/{file2Name}";
            var file2Path = $"{storagePath}/{file2Name}";
            var targetPath = $"{storagePath}/merged.tiff";
            try
            {
                await using var image1Stream = new MemoryStream(Convert.FromBase64String(TiffBase64));
                await _blobStorageService.Write(file1Path, image1Stream, ct);
                if (!System.IO.File.Exists(file2LocalPath))
                    throw new ApplicationException($"{file2LocalPath} does not exists");
                await using var image2Stream = new FileStream(file2LocalPath, FileMode.Open, FileAccess.Read);
                await _blobStorageService.Write(file2Path, image2Stream, ct);

                var mergeRequest = new MergeStorageImagePages
                {
                    TargetPath = targetPath,
                    FileUrls = new[]
                    {
                        file1Path, file2Path
                    },
                    Pages = new[]
                    {
                        new PageReference
                        {
                            FileIndex = 0,
                            FilePageNumber = 0
                        },
                        new PageReference
                        {
                            FileIndex = 1,
                            FilePageNumber = 0
                        },
                        new PageReference
                        {
                            FileIndex = 1,
                            FilePageNumber = 2
                        },
                        new PageReference
                        {
                            FileIndex = 1,
                            FilePageNumber = 5
                        }
                    }
                };

                _executionContext.AutomationRunning = true;
                var response = await _mediator.Send(mergeRequest, ct);
                var numberOfPages = await _mediator.Send(new GetStorageImageFrameCount { Path = response.NewImagePath }, ct);
                _logger.LogInformation($"Merged to {response.NewImagePath} with: {numberOfPages} pages OK!");

                var command = new OpenRead { Path = targetPath };
                var stream = await _mediator.Send(command, ct);
                if (stream == null)
                    return NotFound();
                stream.Position = 0;
                return ExtensionsMapping.TryGetContentType(command.Path, out var contentType)
                    ? new FileStreamResult(stream, contentType)
                    : new FileStreamResult(stream, "application/unknown");
            }
            finally
            {
                await CleanUpImages(file1Path, file2Path, targetPath);
            }
        }

        private async Task CleanUpImages(params string[] paths)
        {
            if (paths == null)
                return;
            foreach (var path in paths)
            {
                try
                {
                    await _blobStorageService.Delete(path, CancellationToken.None);
                }
                catch (Exception e)
                {
                    _logger.LogError($"Error trying to delete testing file at path: {path} from blob storage. Error: {e.Message}");
                }
            }
        }
    }
}