using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.DependencyInjection;
using Nimflow.BlobStorage;
using Nimflow.ExecutionContext;
using Nimflow.Hub.AspNet.Auth;
using Nimflow.Images;
using Nimflow.Orch.Application;
using Nimflow.Orch.Application.Events;
using Nimflow.Orch.Application.FireAndForget;
using NSwag.Annotations;
using ActionNames = Nimflow.BlobStorage.ActionNames;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ApiController]
    [Route("BlobStorage", Order = -1)]
    [ExcludeFromCodeCoverage]
    public class BlobStorageAltController : ControllerBase, IAllowAnonymous
    {
        private readonly IFireAndForgetHandler _fireAndForgetHandler;
        private readonly IMediator _mediator;
        private readonly IUnitSession _unitSession;
        private readonly IExecutionContext _executionContext;
        private readonly IBlobStorageUrlSigner _urlSigner;

        public BlobStorageAltController(IMediator mediator, IFireAndForgetHandler fireAndForgetHandler, IBlobStorageUrlSigner urlSigner, IUnitSession unitSession, IExecutionContext executionContext)
        {
            _mediator = mediator;
            _fireAndForgetHandler = fireAndForgetHandler;
            _urlSigner = urlSigner;
            _unitSession = unitSession;
            _executionContext = executionContext;
        }

        /// <summary>
        ///     Upload file
        /// </summary>
        /// <description>
        ///     Uploads files to a folder specified by a path.
        /// </description>
        /// <param name="path"></param>
        /// <param name="ct"></param>
        /// <returns></returns>
        [HttpPost("[action]")]
        [DisableRequestSizeLimit]
        public async Task<WriteFilesResult> Upload(string path, CancellationToken ct)
        {
            var fileNames = new List<string>();
            var formCollection = await Request.ReadFormAsync(ct);
            ct.ThrowIfCancellationRequested();
            foreach (var file in formCollection.Files)
            {
                await using var stream = new MemoryStream();
                await file.CopyToAsync(stream, ct);
                stream.Position = 0;
                var command = new WriteBlob
                {
                    Data = stream,
                    Path = UrlUtils.Combine(path, file.FileName)
                };
                await _mediator.Send(command, ct);
                fileNames.Add(file.FileName);
            }

            var result = new WriteFilesResult
            {
                Path = path,
                FileNames = fileNames.ToArray()
            };
            await _fireAndForgetHandler.Execute(serviceProvider => serviceProvider.GetRequiredService<IEventPublisher>().SendBlobStorageFilesUpdated(result, CancellationToken.None));
            return result;
        }

        /// <summary>
        ///     List files
        /// </summary>
        /// <description>
        ///     Lists the blob contents at a specified path.
        /// </description>
        /// <param name="command"></param>
        /// <param name="ct"></param>
        /// <returns></returns>
        [HttpPost("[action]")]
        public Task<IReadOnlyCollection<Blob>> List(List command, CancellationToken ct)
        {
            return _mediator.Send(command, ct);
        }

        /// <summary>
        ///     Get file from path
        /// </summary>
        /// <description>
        ///     Streams the binary file content from a path.
        /// </description>
        /// <param name="path"></param>
        /// <param name="ct"></param>
        /// <returns></returns>
        [HttpGet("{*path}")]
        [AllowAnonymous]
        [SwaggerResponse(typeof(string))]
        [SwaggerResponse(StatusCodes.Status400BadRequest, typeof(object))]
        [SwaggerResponse(StatusCodes.Status401Unauthorized, typeof(object))]
        [SwaggerResponse(StatusCodes.Status404NotFound, typeof(object))]
        [SwaggerResponse(StatusCodes.Status500InternalServerError, typeof(object))]
        public async Task<IActionResult> Get(string path, CancellationToken ct)
        {
            if (Request.Query.ContainsKey("signature"))
            {
                Console.WriteLine("Entering to get a blobstorage file with signature");
                //var requestFeature = HttpContext.Features.Get<IHttpRequestFeature>();
                //var rawUrl = $"{Request.Scheme}://{Request.Host}{requestFeature.RawTarget}";
                //if (!_urlSigner.VerifyUri(rawUrl))
                //    return Unauthorized();
                if (QueryHelpers.ParseQuery(Request.QueryString.Value ?? "").TryGetValue("unitId", out var unitId) && unitId.Count > 0)
                    _unitSession.SetUnitId(unitId[0]);
                // Grant read storage permission
                var claims = new List<Claim>
                {
                    new(ClaimTypes.Name, "SignedUrl"),
                    new(AuthConstants.GrantActionsType, ActionNames.ReadStorage)
                };
                HttpContext.User = new ClaimsPrincipal(new ClaimsIdentity(claims, "signedUrl"));
                Console.WriteLine("User assigned");
                _executionContext.AutomationRunning = true;
            }
            var command = new OpenRead { Path = path };
            var stream = await _mediator.Send(command, ct);
            if (stream == null)
                return NotFound();
            if (stream.CanSeek)
                stream.Position = 0;
            return ExtensionsMapping.TryGetContentType(command.Path, out var contentType)
                ? new FileStreamResult(stream, contentType)
                : new FileStreamResult(stream, "application/unknown");
        }

        /// <summary>
        ///     Get file thumbnails
        /// </summary>
        /// <description>
        ///     Creates a thumbnails data-url array from an image in the blob storage
        /// </description>
        /// <param name="query"></param>
        /// <param name="ct"></param>
        /// <returns>An array containing a dataurl string for each page</returns>
        [HttpPost("[action]")]
        public Task<IEnumerable<string>> GetThumbnails(GetThumbnails query, CancellationToken ct)
        {
            return _mediator.Send(query, ct);
        }

        /// <summary>
        ///     Get file's data url from path
        /// </summary>
        /// <description>
        ///     Reads a blob file content from a path a return the content as a DataUrl string.
        ///     https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        /// </description>
        /// <param name="path"></param>
        /// <param name="ct"></param>
        /// <returns>Returns the base64 encoded string</returns>
        [HttpGet("[action]/{*path}")]
        [DisableRequestSizeLimit]
        public Task<string> GetDataUrl(string path, CancellationToken ct)
        {
            return _mediator.Send(new GetDataUrl { Path = path }, ct);
        }

        /// <summary>
        ///     Delete file
        /// </summary>
        /// <description>
        ///     Deletes a blob from a full path.
        /// </description>
        /// <param name="command"></param>
        /// <param name="ct"></param>
        /// <returns></returns>
        [HttpPost("[action]")]
        public Task<DeleteFileResponse> Delete(DeleteFile command, CancellationToken ct)
        {
            return _mediator.Send(command, ct);
        }

        /// <summary>
        ///     Returns a boolean value indicating if the blob storage feature is configured and available in the HUB.
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]")]
        public Task<bool> IsSupported()
        {
            return _mediator.Send(new BlobStorageSupported());
        }

        /// <summary>
        ///     Write files from base 64 data
        /// </summary>
        /// <description>
        ///     Writes multiple file blobs to a single folder.
        /// </description>
        /// <param name="command">
        ///     Command containing the target folder and each file content encoded as a base64 string with a
        ///     filename.
        /// </param>
        /// <param name="ct"></param>
        /// <returns></returns>
        [HttpPost("[action]")]
        [DisableRequestSizeLimit]
        public Task<WriteFilesResult> WriteFiles(WriteFiles command, CancellationToken ct)
        {
            return _mediator.Send(command, ct);
        }

        /// <summary>
        ///     Get a signed url for the blob
        /// </summary>
        /// <description>
        ///     Get a cryptographically signed url to access the blob without requiring token authentication
        /// </description>
        /// <param name="path"></param>
        /// <param name="ct"></param>
        /// <returns>Returns the signed url</returns>
        [HttpGet("[action]")]
        [SwaggerResponse(typeof(string))]
        [SwaggerResponse(StatusCodes.Status404NotFound, typeof(object))]
        public async Task<ActionResult<string>> GetSignedUrl(string path, CancellationToken ct)
        {
            var idx = path.LastIndexOf("/", StringComparison.CurrentCultureIgnoreCase);
            var basePath = idx >= 0 ? path[..idx] : null;
            var prefix = idx >= 0 ? path[(idx + 1)..] : path;
            var list = await _mediator.Send(new List { Path = basePath, FilePrefix = prefix }, ct);
            if (!list.Any())
                return NotFound();
            var url = $"{Request.Scheme}://{Request.Host}{Request.PathBase}/BlobStorage";
            if (!url.EndsWith("/"))
                url += "/";
            url += path;
            if (!_urlSigner.UrlSigningSupported())
                return url;
            url += $"?unitId={_unitSession.GetUnitId()}";
            var signedUrl = _urlSigner.SignUri(url);
            return signedUrl ?? url;
        }
    }
}