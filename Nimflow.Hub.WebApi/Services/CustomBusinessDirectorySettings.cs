namespace Nimflow.Hub.WebApi.Services
{
    public class CustomBusinessDirectorySettings
    {
        public string OrganizationId { get; set; }
        public string OrganizationName { get; set; }
        public CustomBusinessDirectoryUnit[] Units { get; set; }
        public string BaseUrl { get; set; }
    }
}