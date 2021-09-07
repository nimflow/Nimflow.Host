using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Nimflow.BlobStorage;

namespace Nimflow.Images
{
    // ReSharper disable once UnusedMember.Global
    public class MergeStorageImagePagesHandler : IRequestHandler<MergeStorageImagePages, MergeStorageImagePagesResult>
    {
        private readonly IBlobStorageService _blobStorageService;

        public MergeStorageImagePagesHandler(IBlobStorageService blobStorageService)
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

        private async Task<MergeStorageImagePagesResult> DoMerge(MergeStorageImagePages request, CancellationToken cancellationToken)
        {
            var images = await GetSortedImages(request, cancellationToken);

            //TODO: Generate a multiframe tiff and upload to _blobStorageService
            //https://www.leadtools.com/help/sdk/v21/tutorials/dotnet-core-create-a-multipage-file-from-multiple-images.html
            return new MergeStorageImagePagesResult
            {
                NewImagePath = request.TargetPath
            };
        }

        private async Task<IEnumerable<Image>> GetSortedImages(MergeStorageImagePages request, CancellationToken cancellationToken)
        {
            var imagesByFileIndex = await ExtractImages(request, ImageFormat.Tiff, cancellationToken);
            var pages = new List<Image>();
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

        private async Task<Dictionary<int, IDictionary<int, Image>>> ExtractImages(MergeStorageImagePages request, ImageFormat imageFormat, CancellationToken cancellationToken)
        {
            var result = new Dictionary<int, IDictionary<int, Image>>();
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
                    var pageIndices = request.Pages.Where(s => s.FileIndex == fileIndex).Select(s => s.FilePageNumber);
                    var pages = GetPages(stream, pageIndices, imageFormat);
                    result[fileIndex] = pages;
                }
                catch (Exception e)
                {
                    throw new ApplicationException($"Error reading page: {fileUrl}, with message: {e.Message}", e);
                }
            }

            return result;
        }

        private static IDictionary<int, Image> GetPages(Stream stream, IEnumerable<int> pageNumbers, ImageFormat imageFormat)
        {
            var images = new Dictionary<int, Image>();
            var bitmap = (Bitmap) Image.FromStream(stream);
            var count = bitmap.GetFrameCount(FrameDimension.Page);
            foreach (var pageNumber in pageNumbers)
            {
                if (pageNumber >= count)
                    throw new ApplicationException($"The image does not contain a page with index: {pageNumber}");
                bitmap.SelectActiveFrame(FrameDimension.Page, pageNumber);
                var byteStream = new MemoryStream();
                bitmap.Save(byteStream, imageFormat);
                images[pageNumber] = Image.FromStream(byteStream);
            }

            return images;
        }
    }
}