using System.ComponentModel.DataAnnotations;
using Nimflow.BlobStorage;
using Nimflow.Common;

namespace Nimflow.Images
{
    [PermissionRequired(ActionNames.WriteStorage)]
    public class MergeStorageImagePages : ICommand<MergeStorageImagePagesResult>
    {
        [Required] public string[] FileUrls { get; set; }

        [Required] public PageReference[] Pages { get; set; }

        [Required] public string TargetPath { get; set; }
    }
}