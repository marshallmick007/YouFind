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
    public class UnreliableNetworkSimulatorMiddlewareTests
    {
        [Fact]
        public async void test_doesnt_call_simulator_when_not_api_request()
        {
            var httpContext = new UnitTestHttpContext().ForAssetRequest();
            var simulator = new Mock<INetworkSimulator>();
            var next = new RequestDelegate( ( context ) => Task.CompletedTask );
            var mw = new UnreliableNetworkSimulatorMiddleware( next, simulator.Object );

            await mw.Invoke( httpContext );

            simulator.Verify( x => x.SimulateNetworkLatency(), Times.Never );
        }

        [Fact]
        public async void test_non_api_call_calls_next()
        {
            var httpContext = new UnitTestHttpContext().ForAssetRequest();
            var simulator = new Mock<INetworkSimulator>();
            var nextInvoked = false;
            var next = new RequestDelegate( ( context ) =>
            {
                nextInvoked = true;
                return Task.CompletedTask;
            } );
            var mw = new UnreliableNetworkSimulatorMiddleware( next, simulator.Object );

            await mw.Invoke( httpContext );

            Assert.True( nextInvoked );
        }

        [Fact]
        public async void test_calls_simulator_when_api_request()
        {
            var httpContext = new UnitTestHttpContext().ForApiRequest();
            var simulator = new Mock<INetworkSimulator>();
            var next = new RequestDelegate( ( context ) => Task.CompletedTask );
            var mw = new UnreliableNetworkSimulatorMiddleware( next, simulator.Object );

            await mw.Invoke( httpContext );

            simulator.Verify( x => x.SimulateNetworkLatency(), Times.Once );
        }

        [Fact]
        public async void test_api_call_calls_next()
        {
            var httpContext = new UnitTestHttpContext().ForApiRequest();
            var simulator = new Mock<INetworkSimulator>();
            var nextInvoked = false;
            var next = new RequestDelegate( ( context ) =>
            {
                nextInvoked = true;
                return Task.CompletedTask;
            } );
            var mw = new UnreliableNetworkSimulatorMiddleware( next, simulator.Object );

            await mw.Invoke( httpContext );

            Assert.True( nextInvoked );
        }
    }
}
