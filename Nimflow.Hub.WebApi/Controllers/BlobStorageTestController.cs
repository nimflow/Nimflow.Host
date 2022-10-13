using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text.RegularExpressions;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Options;
using Nimflow.BlobStorage;
using Nimflow.Hub.AspNet.Auth;
using Nimflow.Hub.AspNet.BlobsStorage;
using Nimflow.Orch.Application;
using NSwag.Annotations;
using ActionNames = Nimflow.BlobStorage.ActionNames;

namespace Nimflow.Hub.WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [ExcludeFromCodeCoverage]
    public class BlobStorageTestController : ControllerBase, IAllowAnonymous
    {
        private readonly IUnitSession _unitSession;
        private readonly IMediator _mediator;
        private readonly IOptions<BlobStorageSettings> _blobStorageSettings;

        public BlobStorageTestController(IUnitSession unitSession, IMediator mediator, IOptions<BlobStorageSettings> blobStorageSettings)
        {
            _unitSession = unitSession;
            _mediator = mediator;
            _blobStorageSettings = blobStorageSettings;
        }

        [HttpGet("{*path}")]
        [AllowAnonymous]
        [SwaggerResponse(typeof(string))]
        [SwaggerResponse(StatusCodes.Status400BadRequest, typeof(object))]
        [SwaggerResponse(StatusCodes.Status401Unauthorized, typeof(object))]
        [SwaggerResponse(StatusCodes.Status404NotFound, typeof(object))]
        [SwaggerResponse(StatusCodes.Status500InternalServerError, typeof(object))]
        public async Task<IActionResult> Get(string path, CancellationToken ct)
        {
            if (User.Identity?.IsAuthenticated != true)
            {
                Console.WriteLine("Testing blob storage on a unauthenticated user");
                var requestFeature = HttpContext.Features.Get<IHttpRequestFeature>();
                var rawUrl = $"{Request.Scheme}://{Request.Host}{requestFeature.RawTarget}";
                if (!VerifyUri(rawUrl))
                {
                    Console.Error.WriteLine("Signature url is not OK");
                    return Unauthorized();
                }

                if (QueryHelpers.ParseQuery(Request.QueryString.Value ?? "").TryGetValue("unitId", out var unitId) && unitId.Count > 0)
                    _unitSession.SetUnitId(unitId[0]);
                // Grant read storage permission
                var claims = new List<Claim>
                {
                    new(ClaimTypes.Name, "SignedUrl"),
                    new(AuthConstants.GrantActionsType, ActionNames.ReadStorage)
                };
                HttpContext.User = new ClaimsPrincipal(new ClaimsIdentity(claims, "signedUrl"));
                Console.WriteLine("Signature url is OK");
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

        private static string GetSignatureForUri(string uri, byte[] key)
        {
            var hmac = new HMACSHA256(key);
            var signature = hmac.ComputeHash(Encoding.UTF8.GetBytes(uri));
            var hexSignature = BitConverter.ToString(signature).Replace("-", string.Empty).ToLowerInvariant();
            return hexSignature;
        }

        private byte[] GetKey()
        {
            Console.WriteLine($"UrlSignatureKey: {_blobStorageSettings.Value.UrlSignatureKey}");
            var keyBase64 = _blobStorageSettings.Value.UrlSignatureKey;
            if (string.IsNullOrEmpty(keyBase64))
                return null;
            var key = Convert.FromBase64String(keyBase64);
            return key;
        }

        private bool UrlSigningSupported() => !string.IsNullOrEmpty(_blobStorageSettings.Value.UrlSignatureKey);

        private string SignUri(string uri)
        {
            var key = GetKey();
            if (key == null)
                return null;
            var hexSignature = GetSignatureForUri(uri, key);
            return QueryHelpers.AddQueryString(uri, new Dictionary<string, string> { { "signature", hexSignature } });
        }

        private bool VerifyUri(string uri)
        {
            var key = GetKey();
            if (key == null)
                return false;
            var signatureRegex = "[\\?&]signature=([a-z0-9]+)$";
            var signatureMatch = Regex.Match(uri, signatureRegex);
            if (!signatureMatch.Success)
            {
                Console.Error.WriteLine("signatureMatch failed.");
                return false;
            }
            if (signatureMatch.Groups.Count != 2)
            {
                Console.Error.WriteLine($"signatureMatch group count: {signatureMatch.Groups.Count}");
                return false;
            }
            var parsedSignature = signatureMatch.Groups[1].Value;
            var originalUri = Regex.Replace(uri, signatureRegex, "");
            var hexSignature = GetSignatureForUri(originalUri, key);
            if (hexSignature != parsedSignature)
            {
                Console.Error.WriteLine($"hexSignature: {hexSignature} !== parsedSignature: {parsedSignature}");
            }
            return hexSignature == parsedSignature;
        }
    }
}