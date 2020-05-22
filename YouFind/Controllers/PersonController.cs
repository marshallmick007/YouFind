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
        public PersonController( IAppConfiguration appConfiguration )
        {
            _appConfiguration = appConfiguration;
        }

        [HttpGet]
        [Route( "search" )]
        public IActionResult Search( [FromQuery( Name = "q" )] string searchTerm )
        {
            PersonManager manager = new PersonManager(_appConfiguration);

            var results = manager.Search( searchTerm );

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

        
    }
}