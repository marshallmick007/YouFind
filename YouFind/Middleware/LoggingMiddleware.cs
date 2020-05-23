using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind.Middleware
{
    public class LoggingMiddleware
    {
        private readonly RequestDelegate _next = null;

        public LoggingMiddleware( RequestDelegate next )
        {
            _next = next;
        }

        public async Task Invoke( HttpContext context )
        {
            var rqContext = context.CreateRequestContext();

            if ( rqContext.IsApi )
            { 
                LogRequest( context );

                context.Response.Headers.Add( WellKnownHttpHeaders.X_TRANSACTION_ID, rqContext.Id );
            }

            await _next.Invoke( context );

            if ( rqContext.IsApi )
            {
                LogResponse( context );
            }
        }

        private void LogResponse( HttpContext context )
        {
            
        }

        private void LogRequest( HttpContext context )
        {
            
        }
    }
}
