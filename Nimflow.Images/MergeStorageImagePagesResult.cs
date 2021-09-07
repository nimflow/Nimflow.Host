using System.ComponentModel.DataAnnotations;

namespace Nimflow.Images
{
    public class MergeStorageImagePagesResult
    {
        [Required] public string NewImagePath { get; set; }
    }
}