using Microsoft.AspNetCore.Http;
using System;

namespace YouFind.Configuration
{
    public interface IApplicationLogger
    {
        void LogException( HttpContext context, Exception ex );
        void LogRequest( HttpContext context );
        void LogResponse( HttpContext context );
    }
}