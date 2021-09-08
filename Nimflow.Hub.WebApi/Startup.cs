using System;
using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Security.Claims;
using System.Threading.Tasks;
using Auth0.AuthenticationApi;
using FluentValidation;
using Hangfire;
using Hellang.Middleware.ProblemDetails;
using Microsoft.ApplicationInsights.Extensibility;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Nimflow.BusinessDirectory;
using Nimflow.Hub.AspNet;
using Nimflow.Hub.AspNet.Auth;
using Nimflow.Hub.AspNet.Controllers;
using Nimflow.Hub.WebApi.Services;
using Nimflow.Hub.WebApi.Settings;
using Nimflow.Images;
using Nimflow.Users;
using NJsonSchema;
using Serilog;

namespace Nimflow.Hub.WebApi
{
    public class Startup
    {
        private const string AllowAnyOrigin = "AllowAnyOrigin";

        public Startup(IConfiguration configuration)
        {
            Log.Logger = new LoggerConfiguration()
                .MinimumLevel.Information()
                .Enrich.FromLogContext()
                .Enrich.WithProperty("UnitId", configuration["BusinessDirectory:UnitId"])
                .WriteTo
                .ApplicationInsights(TelemetryConfiguration.CreateDefault(), TelemetryConverter.Traces)
                .CreateLogger();
            Configuration = configuration;
        }

        private IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            var settings = new AuthenticationSettings();
            Configuration.Bind("Authentication", settings);

            var authenticationSchemas = settings.GetEnabledSchemeAuthenticationSettings()
                .Select(s => s.Scheme)
                .ToArray();
            services.AddNimflowHub(
                Configuration,
                functions => { functions.RegisterModule(new ImagesModule()); },
                new[] {typeof(MergeStorageImagePages).Assembly},
                authenticationSchemas);
            var customBusinessDirectorySection = Configuration.GetSection("CustomBusinessDirectory");
            if (customBusinessDirectorySection.Exists())
            {
                services.Configure<CustomBusinessDirectorySettings>(customBusinessDirectorySection);
                OverrideNimflowStandardServices(services, customBusinessDirectorySection.Get<CustomBusinessDirectorySettings>());
            }

            AddAuthentication(services, settings);
            services.AddTransient<IBasicAuthProvider, HttpBasicAuthProvider>();

            if (settings.Bearer is {Enabled: true})
                services.AddSingleton(_ => new AuthenticationApiClient(new Uri(settings.Bearer.Authority)));

            services.AddCors(options =>
            {
                options.AddPolicy(AllowAnyOrigin,
                    builder =>
                    {
                        builder.AllowAnyOrigin();
                        builder.AllowAnyHeader();
                        builder.AllowAnyMethod();
                    });
            });
            services.AddApplicationInsightsTelemetry();
            services.AddProblemDetails(ConfigureProblemDetails);
            AddApiDocument(services);
        }

        private void AddAuthentication(IServiceCollection services, AuthenticationSettings settings)
        {
            var schemeSettings = settings.GetEnabledSchemeAuthenticationSettings().ToArray();
            if (schemeSettings.Length == 0)
                throw new ConfigurationErrorsException("No enabled authentication schema found.");
            const string mixed = "mixed";
            var defaultScheme = schemeSettings.Length > 1 ? mixed : schemeSettings.First().Scheme;
            var authentication = services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = defaultScheme;
                options.DefaultChallengeScheme = defaultScheme;
            });
            if (defaultScheme == mixed)
            {
                authentication.AddPolicyScheme(AuthConstants.ApiKeyOrBearer, "ApiKey or Bearer",
                    options => { options.ForwardDefaultSelector = context => { return schemeSettings.FirstOrDefault(scheme => scheme.CanHandle(context.Request.Headers))?.Scheme; }; });
            }
            
            services.Configure<AuthenticationSettings>(Configuration.GetSection("Authentication"));

            foreach (var schemaSettings in settings.GetEnabledSchemeAuthenticationSettings())
            {
                AddAuthenticationScheme(services, authentication, (dynamic) schemaSettings);
            }
        }

        private static void OverrideNimflowStandardServices(IServiceCollection services, CustomBusinessDirectorySettings settings)
        {
            services.AddScoped<IUsersManager, UsersManager>();
            services.AddScoped<IBusinessDirectoryAccessControlService, Services.BusinessDirectoryAccessControlService>();
            services.AddSingleton<IUnitsService>(_ => new UnitsService(settings));
            services.AddSingleton<IUsersService>(_ => new UsersService());
            services.AddSingleton<IOrganizationsService>(_ => new OrganizationsService(settings));
            services.AddSingleton<IPermissionsService>(_ => new PermissionsService());
        }

        // ReSharper disable once UnusedMember.Global
        public void Configure(IApplicationBuilder app, ILoggerFactory loggerFactory)
        {
            app.UseNimflowHub();
            app.UseProblemDetails();
            app.UseAuthentication();
            loggerFactory.AddSerilog();
            app.UseHsts();
            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors(AllowAnyOrigin);
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHangfireDashboard();
            });
            app.UseOpenApi();
            app.UseSwaggerUi3();
        }

        private static void ConfigureProblemDetails(ProblemDetailsOptions options)
        {
            options.IncludeExceptionDetails = (ctx, ex) =>
            {
                switch (ex)
                {
                    case UnauthorizedAccessException:
                    case ValidationException:
                        return false;
                    default:
                    {
                        var env = ctx.RequestServices.GetService<IWebHostEnvironment>();
                        return env.IsDevelopment();
                    }
                }
            };

            options.Rethrow<NotSupportedException>();

            options.Map<ValidationException>(ex =>
            {
                var details = new ValidationProblemDetails
                {
                    Detail = ex.Message,
                    Status = 400,
                    Type = "https://tools.ietf.org/html/rfc7231#section-6.5.1"
                };
                if (ex.Errors == null)
                    return details;
                foreach (var error in ex.Errors) details.Errors[error.PropertyName] = new[] {error.ErrorMessage};
                return details;
            });
            options.Map<ArgumentException>(ex => new StatusCodeProblemDetails(StatusCodes.Status400BadRequest)
                {Detail = ex.Message});
            options.MapToStatusCode<NotImplementedException>(StatusCodes.Status501NotImplemented);
            options.MapToStatusCode<UnauthorizedAccessException>(StatusCodes.Status403Forbidden);
            options.MapToStatusCode<HttpRequestException>(StatusCodes.Status503ServiceUnavailable);
            options.MapToStatusCode<Exception>(StatusCodes.Status500InternalServerError);
        }

        private static void AddApiDocument(IServiceCollection services)
        {
            const string documentName = "v1";
            services.AddOpenApiDocument(options =>
            {
#if !DEBUG
                options.OperationProcessors.Add(new AddUnitIdHeaderParameter());
#endif
                options.Version = typeof(InfoController).Assembly.GetName().Version?.ToString(3);
                options.DocumentName = documentName;
                options.Title = "Nimflow Hub";
                options.SchemaType = SchemaType.Swagger2;
            });
        }

        public void AddAuthenticationScheme(IServiceCollection services, AuthenticationBuilder authenticationBuilder, BasicAuthenticationSettings settings)
        {
            authenticationBuilder.AddBasic(_ => { });
            services.Configure<BasicAuthenticationSettings>(Configuration.GetSection("Authentication:Basic"));
            services.Configure<HttpBasicAuthProviderSettings>(Configuration.GetSection("Authentication:Basic:HttpBasicAuthProvider"));
        }

        public void AddAuthenticationScheme(IServiceCollection services, AuthenticationBuilder authenticationBuilder, ApiKeyAuthenticationSettings settings)
        {
            authenticationBuilder.AddApiKeySupport(_ => { });
        }

        public void AddAuthenticationScheme(IServiceCollection services, AuthenticationBuilder authenticationBuilder, BearerAuthenticationSettings settings)
        {
            authenticationBuilder.AddJwtBearer(
                options =>
                {
                    options.Authority = settings.Authority;
                    options.Audience = settings.Audience;
                    options.SaveToken = true;
                    options.Events = new JwtBearerEvents
                    {
                        OnTokenValidated = context =>
                        {
                            if (context.SecurityToken is not JwtSecurityToken token)
                                return Task.CompletedTask;
                            if (context.Principal is {Identity: ClaimsIdentity identity})
                                identity.AddClaim(new Claim("access_token", token.RawData));

                            return Task.CompletedTask;
                        }
                    };
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        NameClaimType = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
                    };
                });
        }

        public void AddAuthenticationScheme(IServiceCollection services, AuthenticationBuilder authenticationBuilder, NegotiateAuthenticationSettings settings)
        {
            authenticationBuilder.AddNegotiate(options =>
            {
                if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
                    options.EnableLdap(ldapSettings =>
                    {
                        ldapSettings.Domain = settings.LdapDomain;
                        ldapSettings.MachineAccountName = settings.MachineAccountName;
                        ldapSettings.MachineAccountPassword = settings.MachineAccountPassword;
                    });
            });
        }
    }
}