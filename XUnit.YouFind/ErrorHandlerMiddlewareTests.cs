using Microsoft.AspNetCore.Http;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using YouFind.Configuration;
using YouFind.Middleware;

namespace XUnit.YouFind
{
    public class ErrorHandlerMiddlewareTests
    {
        [Fact]
        public async void test_next_throws_but_is_handled()
        {
            var appLogger = new Mock<IApplicationLogger>();
            bool nextIsCalled = false;
            var ex = new ArgumentOutOfRangeException();
            RequestDelegate next = new RequestDelegate( ( httpContext ) => {
                nextIsCalled = true;
                throw ex;
            } );
            var mw = new ErrorHandlerMiddleware( next, appLogger.Object );

            var context = new DefaultHttpContext();
            await mw.Invoke( context );

            Assert.True( nextIsCalled );
            appLogger.Verify( x => x.LogException( context, ex ), Times.Once );
        }
    }
}
