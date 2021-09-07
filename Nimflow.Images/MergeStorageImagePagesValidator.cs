using FluentValidation;

namespace Nimflow.Images
{
    // ReSharper disable once UnusedMember.Global
    public class MergeStorageImagePagesValidator : AbstractValidator<MergeStorageImagePages>
    {
        public MergeStorageImagePagesValidator()
        {
            RuleFor(s => s.FileUrls).NotEmpty();
            RuleFor(s => s.Pages).NotEmpty();
            RuleForEach(s => s.Pages)
                .Must((command, page) => page.FileIndex <= command.Pages.Length)
                .WithMessage((command, page) => $"Page {nameof(page.FileIndex)}: {page.FileIndex} out of bounds. There are only {command.Pages.Length} in command.");
            RuleFor(s => s.TargetPath).NotEmpty();
        }
    }
}