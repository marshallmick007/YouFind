using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace YouFind.Middleware
{
    public class UnreliableNetworkSimulatorMiddleware
    {
        private readonly RequestDelegate _next = null;
        private readonly Random _random = new Random( (int)DateTime.Now.TimeOfDay.TotalMilliseconds );

        public UnreliableNetworkSimulatorMiddleware( RequestDelegate next )
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            var requestContext = context.GetRequestContext();
            if ( requestContext.IsApi )
            {
                int chooser = _random.Next( 0, 20 );
                if ( chooser % 4 == 0 )
                {
                    Thread.Sleep( 3000 );
                }
                // Randomly wait for a bit to simulate slow network
            }
            await _next.Invoke( context );
        }
    }
}
