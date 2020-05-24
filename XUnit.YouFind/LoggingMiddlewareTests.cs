using Microsoft.AspNetCore.Http;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using YouFind;
using YouFind.Configuration;
using YouFind.Middleware;

namespace XUnit.YouFind
{
    public class LoggingMiddlewareTests
    {
        [Fact]
        public async void test_does_not_log_if_not_api_request()
        {
            var appLogger = new Mock<IApplicationLogger>();
            var ex = new ArgumentOutOfRangeException();
            RequestDelegate next = new RequestDelegate( ( httpContext ) => Task.CompletedTask );
            var mw = new LoggingMiddleware( next, appLogger.Object );

            var context = new UnitTestHttpContext().ForAssetRequest();
            await mw.Invoke( context );

            appLogger.Verify( x => x.LogRequest( It.IsAny<HttpContext>() ), Times.Never );
            appLogger.Verify( x => x.LogResponse( It.IsAny<HttpContext>() ), Times.Never );
        }

        [Fact]
        public async void test_does_not_set_response_tranid_header_if_asset_request()
        {
            var appLogger = new Mock<IApplicationLogger>();
            var ex = new ArgumentOutOfRangeException();
            RequestDelegate next = new RequestDelegate( ( httpContext ) => Task.CompletedTask );
            var mw = new LoggingMiddleware( next, appLogger.Object );

            var context = new UnitTestHttpContext().ForAssetRequest();
            var expectedTranId = context.RequestContext.Id;

            await mw.Invoke( context );

            Assert.False( context.Response.Headers.ContainsKey("X-YouFind-TransactionId" ) );
        }

        [Fact]
        public async void test_calls_next_when_not_api_request()
        {
            var appLogger = new Mock<IApplicationLogger>();
            var ex = new ArgumentOutOfRangeException();
            bool isCalled = false;
            RequestDelegate next = new RequestDelegate( ( httpContext ) => 
            {
                isCalled = true;
                return Task.CompletedTask; 
            } );
            var mw = new LoggingMiddleware( next, appLogger.Object );

            var context = new UnitTestHttpContext().ForAssetRequest();
            await mw.Invoke( context );

            Assert.True( isCalled );
        }

        [Fact]
        public async void test_does_logs_if_api_request()
        {
            var appLogger = new Mock<IApplicationLogger>();
            var ex = new ArgumentOutOfRangeException();
            RequestDelegate next = new RequestDelegate( ( httpContext ) => Task.CompletedTask );
            var mw = new LoggingMiddleware( next, appLogger.Object );

            var context = new UnitTestHttpContext().ForApiRequest();
            await mw.Invoke( context );

            appLogger.Verify( x => x.LogRequest( It.IsAny<HttpContext>() ), Times.Once );
            appLogger.Verify( x => x.LogResponse( It.IsAny<HttpContext>() ), Times.Once );
        }

        [Fact]
        public async void test_sets_response_tranid_header_if_api_request()
        {
            var appLogger = new Mock<IApplicationLogger>();
            var ex = new ArgumentOutOfRangeException();
            RequestDelegate next = new RequestDelegate( ( httpContext ) => Task.CompletedTask );
            var mw = new LoggingMiddleware( next, appLogger.Object );

            var context = new UnitTestHttpContext().ForApiRequest();
            var expectedTranId = context.RequestContext.Id;
            
            await mw.Invoke( context );

            Assert.True( context.Response.Headers.ContainsKey( "X-YouFind-TransactionId" ) );
            Assert.Equal( expectedTranId, context.Response.Headers[ "X-YouFind-TransactionId" ] );
        }

        [Fact]
        public async void test_calls_next_when_api_request()
        {
            var appLogger = new Mock<IApplicationLogger>();
            var ex = new ArgumentOutOfRangeException();
            bool isCalled = false;
            RequestDelegate next = new RequestDelegate( ( httpContext ) =>
            {
                isCalled = true;
                return Task.CompletedTask;
            } );
            var mw = new LoggingMiddleware( next, appLogger.Object );

            var context = new UnitTestHttpContext().ForApiRequest();
            await mw.Invoke( context );

            Assert.True( isCalled );
        }
    }

}
