using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Nimflow.Hub.WebApi.Services
{
    [ExcludeFromCodeCoverage]
    public class AuthenticationRequest
    {
        [Required] public string Username { get; set; }
        [Required] public string Password { get; set; }
    }
}