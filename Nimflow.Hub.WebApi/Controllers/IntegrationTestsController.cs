using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using ImageMagick;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Nimflow.BlobStorage;
using Nimflow.BusinessDirectory;
using Nimflow.BusinessDirectory.Queries;
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

        public IntegrationTestsController(IBlobStorageService blobStorageService, IUnitSession unitSession, IUnitsService unitsService)
        {
            _blobStorageService = blobStorageService;
            _unitSession = unitSession;
            _unitsService = unitsService;
        }

        [HttpGet("[action]")]
        [AllowAnonymous]
        public async Task<string> Images(CancellationToken ct)
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
                    return $"{file2LocalPath} does not exists";
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

                var handler = new MergeStorageImagePagesHandler2(_blobStorageService);
                var response = await handler.Handle(mergeRequest, ct);

                return response.NewImagePath;
            }
            finally
            {
                await _blobStorageService.Delete(file1Path, ct);
                await _blobStorageService.Delete(file2Path, ct);
            }
        }
    }

    // ReSharper disable once UnusedMember.Global
    public class MergeStorageImagePagesHandler2 : IRequestHandler<MergeStorageImagePages, MergeStorageImagePagesResult>
    {
        private readonly IBlobStorageService _blobStorageService;

        public MergeStorageImagePagesHandler2(IBlobStorageService blobStorageService)
        {
            _blobStorageService = blobStorageService;
        }

        public Task<MergeStorageImagePagesResult> Handle(MergeStorageImagePages request, CancellationToken cancellationToken)
        {
            if (request == null) throw new ArgumentNullException(nameof(request));
            if (request.Pages == null) throw new ArgumentException($"Unassigned {nameof(request.Pages)}");
            if (request.FileUrls == null) throw new ArgumentException($"Unassigned {nameof(request.FileUrls)}");
            if (string.IsNullOrWhiteSpace(request.TargetPath)) throw new ArgumentException($"Unassigned {nameof(request.TargetPath)}");
            return DoMerge(request, cancellationToken);
        }

        private async Task<MergeStorageImagePagesResult> DoMerge(MergeStorageImagePages request, CancellationToken ct)
        {
            var images = await GetSortedImages(request, ct);

            await using (var mergedStream = await MergeTiff(images, ct))
            {
                await _blobStorageService.Write(request.TargetPath, mergedStream, ct);
            }

            foreach (var image in images)
            {
                try
                {
                    image.Dispose();
                }
                catch
                {
                    //ignore
                }
            }

            return new MergeStorageImagePagesResult
            {
                NewImagePath = request.TargetPath
            };
        }

        private async Task<IReadOnlyCollection<IMagickImage<ushort>>> GetSortedImages(MergeStorageImagePages request, CancellationToken ct)
        {
            var imagesByFileIndex = await ExtractImages(request, ct);
            var pages = new List<IMagickImage<ushort>>();
            foreach (var page in request.Pages)
            {
                if (!imagesByFileIndex.TryGetValue(page.FileIndex, out var fileImagesByPages))
                    throw new ApplicationException($"Page {page.FileIndex} not found in {nameof(imagesByFileIndex)}");
                if (!fileImagesByPages.TryGetValue(page.FilePageNumber, out var image))
                    throw new ApplicationException($"Page number: {page.FilePageNumber} not found in file with index {page.FileIndex}");
                pages.Add(image);
            }

            return pages;
        }

        private async Task<Dictionary<int, IDictionary<int, IMagickImage<ushort>>>> ExtractImages(MergeStorageImagePages request, CancellationToken cancellationToken)
        {
            var result = new Dictionary<int, IDictionary<int, IMagickImage<ushort>>>();
            foreach (var fileIndex in request.Pages.GroupBy(s => s.FileIndex).Select(s => s.Key))
            {
                if (fileIndex >= request.FileUrls.Length)
                    throw new ApplicationException($"There is not a FileUrl with index: {fileIndex}");
                var fileUrl = request.FileUrls[fileIndex];
                if (string.IsNullOrWhiteSpace(fileUrl))
                    throw new ApplicationException($"Unassigned FileUrl with index: {fileIndex}");
                try
                {
                    await using var stream = await _blobStorageService.OpenRead(fileUrl, cancellationToken);
                    if (stream == null)
                        throw new ApplicationException($"Image at {fileUrl} not found.");
                    var pageIndices = request.Pages.Where(s => s.FileIndex == fileIndex).Select(s => s.FilePageNumber);
                    stream.Position = 0;
                    var pages = GetPages(stream, pageIndices);
                    result[fileIndex] = pages;
                }
                catch (Exception e)
                {
                    throw new ApplicationException($"Error reading page: {fileUrl}, with message: {e.Message}", e);
                }
            }

            return result;
        }

        private static IDictionary<int, IMagickImage<ushort>> GetPages(Stream stream, IEnumerable<int> pageNumbers)
        {
            if (stream == null) throw new ArgumentNullException(nameof(stream));
            var images = new Dictionary<int, IMagickImage<ushort>>();
            using var imageCollection = new MagickImageCollection(stream);
            foreach (var pageNumber in pageNumbers)
            {
                if (pageNumber >= imageCollection.Count)
                    throw new ApplicationException($"The image does not contain a page with index: {pageNumber}");
                images[pageNumber] = new MagickImage(imageCollection[pageNumber]);
            }

            return images;
        }

        private static async Task<MemoryStream> MergeTiff(IEnumerable<IMagickImage<ushort>> images, CancellationToken ct)
        {
            var collection = new MagickImageCollection();

            foreach (var image in images)
            {
                collection.Add(image);
            }

            var memoryStream = new MemoryStream();
            await collection.WriteAsync(memoryStream, ct);
            return memoryStream;
        }
    }
}