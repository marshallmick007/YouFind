using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YouFind.Configuration;
using YouFind.Data.Entities;

namespace YouFind.Data
{
    public class PersonManager
    {
        private List<Person> _mockData = new List<Person>();

        private readonly IAppConfiguration _appConfiguration;

        public PersonManager()
        {
            SetupMockData();
        }

        public PersonManager( IAppConfiguration appConfiguration )
        {
            _appConfiguration = appConfiguration;
        }

        public List<Person> Search( string searchTerm )
        {
            List<Person> retval = new List<Person>();

            using ( var db = new YouFindDBContext( _appConfiguration.ConnectionString ) )
            {
                //var query = db.People.Where( x => x.FirstName.Contains( searchTerm ) || x.LastName.Contains( searchTerm ) );

                var q = from p in db.People
                        where p.FirstName.Contains( searchTerm ) || p.LastName.Contains( searchTerm )
                        select new Person()
                        {
                            //Age = (int)Math.Floor( (DateTime.Today - p.DateOfBirth).TotalDays / 365.25 ),
                            Id = p.Id,
                            DateOfBirth = p.DateOfBirth,
                            Name = p.FirstName + " " + p.LastName,
                            Interests = p.Interests.Select( x => x.Interest ).ToList(),
                            Address = new Address()
                            {
                                AddressLine1 = p.AddressLine1,
                                AddressLine2 = p.AddressLine2,
                                City = p.City,
                                State = p.State,
                                PostalCode = p.PostalCode
                            }
                        };

                retval = q.ToList();
            }

            foreach ( var p in retval )
            {
                p.Age = ComputeAge( p.DateOfBirth );
                p.Avatar = string.Format( "/profiles/{0}.jpg", p.Id );
            }

            retval.ForEach( x => x.Age = ComputeAge( x.DateOfBirth ) );

            return retval;
        }

        private int ComputeAge( DateTime dateOfBirth )
        {
            return (int)Math.Floor( (DateTime.Now - dateOfBirth).TotalDays / 365.25 );
        }

        private void SetupMockData()
        {
            _mockData.Add( new Person() { Id = 1, Name = "Abigail Smith" } );
            _mockData.Add( new Person() { Id = 2, Name = "Ben Aberdeen" } );
            _mockData.Add( new Person() { Id = 3, Name = "Clark Kent" } );
            _mockData.Add( new Person() { Id = 4, Name = "Dilbert" } );
            _mockData.Add( new Person() { Id = 5, Name = "Edgar Kensington" } );
            _mockData.Add( new Person() { Id = 6, Name = "Fats Waller" } );
            _mockData.Add( new Person() { Id = 7, Name = "George Costanza" } );
            _mockData.Add( new Person() { Id = 8, Name = "Homer Simpson" } );
            _mockData.Add( new Person() { Id = 9, Name = "Isabelle Bellini" } );
            _mockData.Add( new Person() { Id = 10, Name = "Jake Silar" } );
            _mockData.Add( new Person() { Id = 11, Name = "Kenneth Sommers" } );
            _mockData.Add( new Person() { Id = 12, Name = "Lamar Williams" } );
            _mockData.Add( new Person() { Id = 13, Name = "Marsellis Wallace" } );

        }
    }
}
