using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind.Middleware
{
    public class UnreliableNetworkSimulatorMiddleware
    {
        private readonly RequestDelegate _next = null;

        public UnreliableNetworkSimulatorMiddleware( RequestDelegate next )
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var requestContext = context.GetRequestContext();
            if ( requestContext.IsApi )
            {
                // Randomly wait for a bit to simulate slow network
            }
            await _next.Invoke( context );
        }
    }
}
