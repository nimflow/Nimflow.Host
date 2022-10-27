using System;
using System.Collections.Generic;
using Nimflow.Orch.Application.Functions;

namespace Nimflow.Hub.CustomHandlers
{
    public class CustomHttpModule : MediatorModule
    {
        public override string Name => "CustomHttp";
        public override string[] RequirePermissions => Array.Empty<string>();

        protected override IEnumerable<Type> GetRequestTypes()
        {
            return new[] { typeof(CustomPostMultipartForm) };
        }
    }
}