using System.ComponentModel.DataAnnotations;
using Nimflow.Common;

namespace Nimflow.Images
{
    public class MergeStorageImagePages : ICommand<MergeStorageImagePagesResult>
    {
        [Required] public string[] FileUrls { get; set; }

        [Required] public PageReference[] Pages { get; set; }

        [Required] public string TargetPath { get; set; }
    }
}