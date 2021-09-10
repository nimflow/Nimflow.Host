using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Newtonsoft.Json;
using Nimflow.BlobStorage;
using Nimflow.Functions;
using Nimflow.Images;
using Xunit;

namespace Nimflow.Hub.WebApi.Tests
{
    public class MergeStorageImagePagesTest : ServerFixtureTest
    {
        private const string MultiPageTifUrl = "Images/sample-multipage.tif";

        public MergeStorageImagePagesTest(ServerFixture fixture): base(fixture)
        {
        }

        [Fact]
        public async Task MergeStorageImagePagesShouldRunUsingMediator()
        {
            RunAsAutomation();
            await AddTestFiles();
            var mediator = GetRequiredService<IMediator>();
            const string targetPath = "Outbox/NewByMediatorImage.tiff";
            var command = BuildMergePagesCommand(targetPath);
            var result = await mediator.Send(command, CancellationToken.None);
            Assert.Equal(result.NewImagePath, targetPath);
            var mergedFile = await mediator.Send(new OpenRead
            {
                Path = targetPath
            });
            Assert.NotNull(mergedFile);
            Assert.NotEqual(0, mergedFile.Length);
            Assert.True(await new ImageValidator(".tiff").IsValidAsync(mergedFile, targetPath));
            var frameCount = Image.FromStream(mergedFile).GetFrameCount(System.Drawing.Imaging.FrameDimension.Page);
            Assert.Equal(frameCount, command.Pages.Length);
        }

        [Fact]
        public async Task MergeStorageImagePagesShouldRunUsingFunctions()
        {
            RunAsAutomation();
            await AddTestFiles();
            var functionsDomain = GetRequiredService<IFunctionsDomain>();
            var imagesModule = functionsDomain.FindByName(new ImagesModule().Name);
            Assert.NotNull(imagesModule);
            const string targetPath = "Outbox/NewByMediatorImage.tif";
            var command = BuildMergePagesCommand(targetPath);
            var arguments = JsonConvert.DeserializeObject<IDictionary<string, object>>(JsonConvert.SerializeObject(command));
            await imagesModule.Call(Fixture.Server.Services, nameof(MergeStorageImagePages), arguments, CancellationToken.None);
        }

        private static MergeStorageImagePages BuildMergePagesCommand(string targetPath)
        {
            var command = new MergeStorageImagePages
            {
                TargetPath = targetPath,
                FileUrls = new[]
                {
                    MultiPageTifUrl
                },
                Pages = new PageReference[]
                {
                    new()
                    {
                        FileIndex = 0,
                        FilePageNumber = 1
                    },
                    new()
                    {
                        FileIndex = 0,
                        FilePageNumber = 2
                    }
                }
            };
            return command;
        }

        private async Task<IReadOnlyCollection<string>> AddTestFiles()
        {
            var urls = new List<string>();
            var blobStorage = GetRequiredService<IBlobStorageService>();
            const string images = "Images";
            var added = 0;
            foreach (var filePath in Directory.GetFiles(Path.Combine(Directory.GetCurrentDirectory(), images)))
            {
                await using var source = new FileStream(filePath, FileMode.Open, FileAccess.Read);
                var path = $"{images}/{Path.GetFileName(filePath)}";
                await blobStorage.Write(path, source, CancellationToken.None);
                urls.Add(path);
                added++;
            }

            Assert.Contains(urls, url => url == MultiPageTifUrl);
            var list = await blobStorage.List(images, null, CancellationToken.None);
            Assert.NotNull(list);
            Assert.Equal(added, list.Count);
            if (added <= 0)
                return urls;
            await using var stream = await blobStorage.OpenRead(urls.First(), CancellationToken.None);
            Assert.NotEqual(0, stream.Length);
            return urls;
        }
    }
}