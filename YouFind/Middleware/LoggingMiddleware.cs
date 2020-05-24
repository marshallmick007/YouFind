using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YouFind.Configuration;

namespace YouFind.Middleware
{
    public class LoggingMiddleware
    {
        private readonly RequestDelegate _next = null;
        private readonly IApplicationLogger _appLogger;

        public LoggingMiddleware( RequestDelegate next, IApplicationLogger appLogger )
        {
            _next = next;
            _appLogger = appLogger;
        }

        public async Task Invoke( HttpContext context )
        {
            var rqContext = context.CreateRequestContext();

            if ( rqContext.IsApi )
            { 
                _appLogger.LogRequest( context );

                context.Response.Headers.Add( WellKnownHttpHeaders.X_TRANSACTION_ID, rqContext.Id );
            }

            await _next.Invoke( context );

            if ( rqContext.IsApi )
            {
                _appLogger.LogResponse( context );
            }
        }
    }
}
