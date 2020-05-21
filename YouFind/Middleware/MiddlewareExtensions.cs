using Microsoft.AspNetCore.Builder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YouFind.Middleware;

namespace YouFind
{
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseUnreliableNetworkSimulatorMiddleware( this IApplicationBuilder builder )
        {
            return builder.UseMiddleware<UnreliableNetworkSimulatorMiddleware>();
        }

        public static IApplicationBuilder UseErrorHandlerMiddleware( this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ErrorHandlerMiddleware>();
        }

        public static IApplicationBuilder UseLoggingMiddleware( this IApplicationBuilder builder )
        {
            return builder.UseMiddleware<LoggingMiddleware>();
        }
    }
}
