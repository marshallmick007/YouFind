using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using YouFind;

namespace XUnit.YouFind
{
    public class RequestContextTests
    {
        [Theory]
        [InlineData("/test/path")]
        [InlineData( "/" )]
        [InlineData( "/a/p/i/" )]
        [InlineData( "/api_no/path" )]
        [InlineData( "/its/a/different/api/path" )]
        [InlineData( "" )]
        [InlineData( null )]
        public void test_doesnt_set_api_when( string path )
        {
            RequestContext c = new RequestContext( path );

            Assert.False( c.IsApi );
        }

        [Theory]
        [InlineData( "/api" )]
        [InlineData( "/api/" )]
        [InlineData( "/api/path" )]
        [InlineData( "/API/path" )]
        public void test_sets_api_when( string path )
        {
            RequestContext c = new RequestContext( path );

            Assert.True( c.IsApi );
        }

        [Fact]
        public void test_sets_new_guid_id()
        {
            RequestContext c = new RequestContext( "/test/" );

            Assert.NotEqual( Guid.Empty.ToString(), c.Id );
        }

        [Fact]
        public void test_sets_path()
        {
            RequestContext c = new RequestContext( "/test/" );

            Assert.Equal( "/test/", c.Path.ToString() );
        }
    }
}
