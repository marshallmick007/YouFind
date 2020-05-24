using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using YouFind.Configuration;
using YouFind.Controllers;
using YouFind.Data;

namespace XUnit.YouFind
{
    public class PersonControllerTests
    {
        [Fact]
        public void test_doesnt_error_if_manager_returns_null()
        {
            var manager = new Mock<IPersonManager>();
            manager.Setup( x => x.Search( It.IsAny<string>() ) ).Returns( (List<Person>)null );
            var config = new Mock<IAppConfiguration>();

            var controller = new PersonController( config.Object, manager.Object );

            var result = controller.Search( "test" );

            Assert.IsType<JsonResult>( result );
            Assert.Empty( ((JsonResult)result).Value as IEnumerable<Person> );

        }

        [Fact]
        public void test_sets_age_for_manager_results()
        {
            var expectedAge = 10;
            var manager = new Mock<IPersonManager>();
            var people = new List<Person>();
            people.Add( new Person() { DateOfBirth = DateTime.Now.AddDays( -(expectedAge * 365.25) ) } );
            manager.Setup( x => x.Search( It.IsAny<string>() ) ).Returns( people );
            var config = new Mock<IAppConfiguration>();

            var controller = new PersonController( config.Object, manager.Object );

            var result = controller.Search( "test" );

            Assert.IsType<JsonResult>( result );
            Assert.NotEmpty( ((JsonResult)result).Value as IEnumerable<Person> );

            var person = ((List<Person>)((JsonResult)result).Value)[ 0 ];

            Assert.Equal( expectedAge, person.Age );
        }

        [Fact]
        public void test_sets_avatar_path_for_manager_results()
        {
            var manager = new Mock<IPersonManager>();
            var people = new List<Person>();
            people.Add( new Person() { Id = 42 } );
            manager.Setup( x => x.Search( It.IsAny<string>() ) ).Returns( people );
            var config = new Mock<IAppConfiguration>();

            var controller = new PersonController( config.Object, manager.Object );

            var result = controller.Search( "test" );

            Assert.IsType<JsonResult>( result );
            Assert.NotEmpty( ((JsonResult)result).Value as IEnumerable<Person> );

            var person = ((List<Person>)((JsonResult)result).Value)[ 0 ];

            Assert.Equal( "/profiles/42.jpg", person.Avatar );
        }
    }
}
