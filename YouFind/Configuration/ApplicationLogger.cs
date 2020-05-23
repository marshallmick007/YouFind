using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind.Configuration
{
    public class ApplicationLogger : IApplicationLogger
    {
        public void LogException( HttpContext context, Exception ex )
        {
            // TODO: Implement a logging library
        }

        public void LogRequest( HttpContext context )
        {
            // TODO: Implement a logging library
        }

        public void LogResponse( HttpContext context )
        {
            // TODO: Implement a logging library
        }
    }
}
