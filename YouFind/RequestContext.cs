using Microsoft.AspNetCore.Http;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind
{
    public class RequestContext
    {
        public RequestContext( PathString requestPath )
        {
            this.Id = Guid.NewGuid().ToString();
            this.Path = requestPath;

            this.IsApi = this.Path.StartsWithSegments( "/api", StringComparison.OrdinalIgnoreCase );
        }

        public string Id { get; private set; }

        public bool IsApi { get; private set; }

        public PathString Path { get; private set; }
    }

    public static class RequestContextExtensions
    {
        public static RequestContext GetRequestContext( this HttpContext context )
        {
            RequestContext retval = null;
            if ( context.Items.ContainsKey( WellKnownContextKeys.RQ_CONTEXT ))
            { 
                retval = context.Items[ WellKnownContextKeys.RQ_CONTEXT ] as RequestContext;
            }

            return retval;
        }

        public static RequestContext CreateRequestContext( this HttpContext context )
        {
            RequestContext retval = null;
            if ( context.Items.ContainsKey( WellKnownContextKeys.RQ_CONTEXT ) )
            {
                retval = context.Items[ WellKnownContextKeys.RQ_CONTEXT ] as RequestContext;
            }
            else
            {
                retval = new RequestContext( context.Request.Path );
                context.Items[ WellKnownContextKeys.RQ_CONTEXT ] = retval;
            }

            return retval;
        }
    }
}
