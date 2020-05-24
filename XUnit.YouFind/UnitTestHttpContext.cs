using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using YouFind;

namespace XUnit.YouFind
{
    public class UnitTestHttpContext : DefaultHttpContext
    {
        public UnitTestHttpContext()
        {

        }

        public RequestContext RequestContext { get; private set; }

        public UnitTestHttpContext ForApiRequest()
        {
            this.Request.Path = "/api/test";
            this.RequestContext = this.CreateRequestContext();

            return this;
        }

        public UnitTestHttpContext ForAssetRequest()
        {
            this.Request.Path = "/SampleApp/dist/angular.js";
            this.RequestContext = this.CreateRequestContext();

            return this;
        }
    }
}
