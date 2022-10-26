using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.Extensions.Logging;
using Nimflow.Functions.Http;

namespace Nimflow.Hub.CustomHandlers
{
    [ExcludeFromCodeCoverage]
    public class CustomPostMultipartFormHandler : IRequestHandler<CustomPostMultipartForm, SendHttpResponse>
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly ILogger<CustomPostMultipartFormHandler> _logger;

        public CustomPostMultipartFormHandler(IHttpClientFactory httpClientFactory, ILogger<CustomPostMultipartFormHandler> logger)
        {
            _httpClientFactory = httpClientFactory;
            _logger = logger;
        }

        public async Task<SendHttpResponse> Handle(CustomPostMultipartForm request, CancellationToken cancellationToken)
        {
            _logger.LogInformation($"{nameof(CustomPostMultipartFormHandler)} started.");
            using var client = _httpClientFactory.CreateClient(GetType().Name);
            var httpRequest = new HttpRequestMessage(GetHttpMethod(request), request.Uri)
            {
                RequestUri = new Uri(request.Uri)
            };
            _logger.LogInformation($"{nameof(CustomPostMultipartFormHandler)} building content.");
            httpRequest.Content = BuildContent(request, httpRequest);
            _logger.LogInformation($"{nameof(CustomPostMultipartFormHandler)} content built.");
            AddHeaders(httpRequest.Headers, request.Headers);
            _logger.LogInformation($"{nameof(CustomPostMultipartFormHandler)} sending.");
            try
            {
                var response = await client.SendAsync(httpRequest, HttpCompletionOption.ResponseContentRead, cancellationToken);
                response.EnsureSuccessStatusCode();
                return await ConvertResponse(response);
            }
            catch (Exception e)
            {
                _logger.LogError($"Error: {e.Message} sending content to: {request.Uri}.");
                throw;
            }
        }

        private static void AddHeaders(HttpHeaders headers, IDictionary<string, object>? requestHeaders)
        {
            if (requestHeaders == null || requestHeaders.Count == 0)
                return;
            foreach (var (name, value) in requestHeaders)
            {
                switch (value)
                {
                    case null:
                        continue;
                    case string headerValue:
                        headers.Add(name, headerValue);
                        break;
                    case IEnumerable values:
                    {
                        foreach (var headerValue in values)
                        {
                            if (string.IsNullOrWhiteSpace(headerValue as string))
                                continue;
                            headers.Add(name, headerValue as string);
                        }

                        break;
                    }
                }
            }
        }

        protected async Task<SendHttpResponse> ConvertResponse(HttpResponseMessage response)
        {
            return new SendHttpResponse
            {
                Success = response.IsSuccessStatusCode,
                StatusCode = Convert.ToInt32(response.StatusCode),
                ReasonPhrase = response.ReasonPhrase,
                Content = await response.Content.ReadAsStringAsync()
            };
        }

        protected HttpContent BuildContent(CustomPostMultipartForm request, HttpRequestMessage httpRequestMessage)
        {
            var chars = 0;
            var form = new MultipartFormDataContent();
            if (request.StringEntries != null)
            {
                foreach (var stringEntry in request.StringEntries)
                {
                    chars += stringEntry.Value?.Length ?? 0;
                    form.Add(new StringContent(stringEntry.Value), stringEntry.Name);
                }
            }

            if (request.Base64FileEntries == null)
            {
                _logger.LogInformation($"{nameof(CustomPostMultipartFormHandler)} content with no Base64FileEntries built.");
                return form;
            }

            var files = 0;
            foreach (var base64FileEntry in request.Base64FileEntries)
            {
                files++;
                var match = Regex.Match(base64FileEntry.Base64, @"data:image/(?<type>.+?),(?<data>.+)");
                var base64Data = match.Groups.Count == 3 ? match.Groups["data"].Value : base64FileEntry.Base64;
                chars += base64Data?.Length ?? 0;
                var content = new ByteArrayContent(Convert.FromBase64String(base64Data));
                var name = !string.IsNullOrWhiteSpace(base64FileEntry.Name) ? base64FileEntry.Name : $"file{files}";
                content.Headers.Add("Content-Disposition", string.Format($"form-data; name=\"{name}\"; filename=\"{base64FileEntry.FileName}\""));
                form.Add(content, name);
            }

            _logger.LogInformation($"{nameof(CustomPostMultipartFormHandler)} content with {request.Base64FileEntries.Length} Base64FileEntries built. Total chars: {chars}.");
            return form;
        }

        protected HttpMethod GetHttpMethod(CustomPostMultipartForm request)
        {
            return HttpMethod.Post;
        }
    }
}