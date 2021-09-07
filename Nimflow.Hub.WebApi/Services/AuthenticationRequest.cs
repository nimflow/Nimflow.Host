using System.ComponentModel.DataAnnotations;

namespace Nimflow.Hub.WebApi.Services
{
    public class AuthenticationRequest
    {
        [Required] public string Username { get; set; }
        [Required] public string Password { get; set; }
    }
}   