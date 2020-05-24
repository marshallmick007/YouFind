using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using YouFind.Configuration;
using YouFind.Data;
using YouFind.Data.Entities;

namespace YouFind.Controllers
{
    [Route( "api/[controller]" )]
    public class PersonController : Controller
    {
        private readonly IAppConfiguration _appConfiguration;
        private readonly IPersonManager _personManager;

        public PersonController( IAppConfiguration appConfiguration, IPersonManager personManager )
        {
            _appConfiguration = appConfiguration;
            _personManager = personManager;
        }

        [HttpGet]
        [Route( "search" )]
        public IActionResult Search( [FromQuery( Name = "q" )] string searchTerm )
        {
            var results = _personManager.Search( searchTerm );

            if ( results == null )
            {
                results = new List<Person>();
            }
            else
            {
                foreach ( var person in results )
                {
                    person.Age = ComputeAge( person.DateOfBirth );
                    person.Avatar = string.Format( "/profiles/{0}.jpg", person.Id );
                }
            }

            return new JsonResult( results );
        }

        [HttpGet]
        [Route( "seed" )]
        public IActionResult SeedDatabase()
        {
            int count = 0;
            using ( var db = new YouFindDBContext( _appConfiguration.ConnectionString ) )
            {
                count = db.People.Count( x => x.Id > 0 );

                if ( count == 0 )
                {
                    DatabaseSeeder seeder = new DatabaseSeeder( _appConfiguration );
                    seeder.SeedDatabase();
                }
            }
            return new JsonResult( count );
        }

        #region Private Methods

        private int ComputeAge( DateTime dateOfBirth )
        {
            return (int)Math.Floor( (DateTime.Now - dateOfBirth).TotalDays / 365.25 );
        }

        #endregion`
    }
}