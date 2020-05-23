using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YouFind.Configuration;

namespace YouFind.Middleware
{
    public class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next = null;
        private readonly IApplicationLogger _applicationLogger;

        public ErrorHandlerMiddleware( RequestDelegate next, IApplicationLogger applicationLogger )
        {
            _next = next;
            _applicationLogger = applicationLogger;
        }

        public async Task Invoke( HttpContext context )
        {
            var requestContext = context.GetRequestContext();
            try
            {
                await _next.Invoke( context );
            }
            catch ( Exception ex )
            {
                _applicationLogger.LogException( context, ex );

                // TODO: build a standard error response
            }
        }
    }
}
