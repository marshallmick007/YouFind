using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind.Middleware
{
    public class ErrorHandlerMiddleware
    {
        private readonly RequestDelegate _next = null;

        public ErrorHandlerMiddleware( RequestDelegate next )
        {
            _next = next;
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
                // TODO: build a standard error response
            }
        }
    }
}
