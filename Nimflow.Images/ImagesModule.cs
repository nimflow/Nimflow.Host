using System;
using System.Collections.Generic;
using Nimflow.BlobStorage;
using Nimflow.Orch.Application.Functions;

namespace Nimflow.Images
{
    public class ImagesModule : MediatorModule
    {
        public override string Name => "Images";

        public override string[] RequirePermissions => new[]
        {
            ActionNames.ReadStorage,
            ActionNames.WriteStorage
        };

        protected override IEnumerable<Type> GetRequestTypes()
        {
            return new[]
            {
                typeof(MergeStorageImagePages)
            };
        }
    }
}