using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using YouFind.Data;

namespace YouFind.Controllers
{
    [Route("api/[controller]")]
    public class PersonController : Controller
    {
        [HttpGet]
        [Route("search")]
        public IActionResult Search([FromQuery(Name = "q")] string searchTerm )
        {
            PersonManager manager = new PersonManager();

            var results = manager.Search( searchTerm );

            return new JsonResult( results );
        }
    }
}