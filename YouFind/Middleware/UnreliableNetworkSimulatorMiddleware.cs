using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using YouFind.Configuration;

namespace YouFind.Middleware
{
    public class UnreliableNetworkSimulatorMiddleware
    {
        private readonly RequestDelegate _next = null;
        private readonly INetworkSimulator _networkSimulator;

        public UnreliableNetworkSimulatorMiddleware( RequestDelegate next, INetworkSimulator simulator )
        {
            _next = next;
            _networkSimulator = simulator;
        }


        public async Task Invoke(HttpContext context)
        {
            var requestContext = context.GetRequestContext();
            if ( requestContext.IsApi )
            {
                _networkSimulator.SimulateNetworkLatency();
            }
            await _next.Invoke( context );
        }
    }
}
