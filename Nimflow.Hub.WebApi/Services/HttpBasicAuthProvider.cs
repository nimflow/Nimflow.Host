using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Dynamic;
using System.IdentityModel.Tokens.Jwt;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Options;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
    public class HttpBasicAuthProvider : IBasicAuthProvider
    {
        private readonly IMemoryCache _cache;
        private readonly IOptionsSnapshot<HttpBasicAuthProviderSettings> _optionsSnapshot;

        public HttpBasicAuthProvider(IOptionsSnapshot<HttpBasicAuthProviderSettings> optionsSnapshot, IMemoryCache cache)
        {
            _optionsSnapshot = optionsSnapshot;
            _cache = cache;
        }

        public Task<JwtSecurityToken> Authenticate(string credential, CancellationToken ct)
        {
            return GetToken(credential, ct);
        }

        private object BuildBody(string username, string password, HttpBasicAuthProviderSettings settings)
        {
            IDictionary<string, object> body = new ExpandoObject();
            body[settings.PropertiesMap?.Username ?? nameof(username)] = username;
            body[settings.PropertiesMap?.Password ?? nameof(password)] = password;
            body[settings.PropertiesMap?.Application ?? "application"] = _optionsSnapshot.Value.Application;
            return body;
        }

        private static HttpClient BuildHttpClient(HttpBasicAuthProviderSettings settings)
        {
            var client = new HttpClient();
            if (settings.Headers == null) return client;
            foreach (var header in settings.Headers)
                client.DefaultRequestHeaders.Add(header.Name, header.Value);
            return client;
        }

        public async Task<string> GetTokenFromHttpService(string username, string password, CancellationToken ct)
        {
            var settings = _optionsSnapshot.Value;
            if (settings?.AuthorizeUrl == null)
                return null;
            var client = BuildHttpClient(settings);
            var body = BuildBody(username, password, settings);
            var response = await client.PostAsJsonAsync(new Uri(settings.AuthorizeUrl), body, ct);
            ct.ThrowIfCancellationRequested();
            response.EnsureSuccessStatusCode();
            return await response.Content.ReadAsStringAsync(ct);
        }

        private async Task<JwtSecurityToken> GetToken(string credential, CancellationToken ct)
        {
            if (_cache.TryGetValue(credential, out JwtSecurityToken jwtToken))
            {
                if (jwtToken.ValidTo == DateTime.MinValue || jwtToken.ValidTo > DateTime.Now.AddMinutes(10))
                    return jwtToken;
            }

            var credentialBytes = Convert.FromBase64String(credential);
            var credentials = Encoding.UTF8.GetString(credentialBytes).Split(new[] { ':' }, 2);
            var token = await GetTokenFromHttpService(credentials[0], credentials[1], ct);
            if (token == null)
                return null;
            var handler = new JwtSecurityTokenHandler();
            jwtToken = handler.ReadJwtToken(token);
            var absoluteExpiration = DateTimeOffset.Now.AddHours(1);
            _cache.Set(
                credential,
                jwtToken,
                jwtToken.ValidTo == DateTime.MinValue || jwtToken.ValidTo > absoluteExpiration
                    ? absoluteExpiration
                    : jwtToken.ValidTo);
            return jwtToken;
        }
    }
}