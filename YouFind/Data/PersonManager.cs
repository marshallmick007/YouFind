using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind.Data
{
    public class PersonManager
    {
        private List<Person> _mockData = new List<Person>();

        public PersonManager()
        {
            SetupMockData();
        }

        public List<Person> Search( string searchTerm )
        {
            List<Person> retval = new List<Person>();

            if ( !string.IsNullOrWhiteSpace( searchTerm ) )
            { 
                retval = _mockData.Where( x => 
                                x.Name.IndexOf( searchTerm, StringComparison.OrdinalIgnoreCase ) >= 0 ).ToList();
            }
            return retval;
        }

        private void SetupMockData()
        {
            _mockData.Add( new Person() { Name = "Abigail Smith" } );
            _mockData.Add( new Person() { Name = "Ben Aberdeen" } );
            _mockData.Add( new Person() { Name = "Clark Kent" } );
            _mockData.Add( new Person() { Name = "Dilbert" } );
            _mockData.Add( new Person() { Name = "Edgar Kensington" } );
            _mockData.Add( new Person() { Name = "Fats Waller" } );
            _mockData.Add( new Person() { Name = "George Costanza" } );
            _mockData.Add( new Person() { Name = "Homer Simpson" } );
            _mockData.Add( new Person() { Name = "Isabelle Bellini" } );
            _mockData.Add( new Person() { Name = "Jake Silar" } );
            _mockData.Add( new Person() { Name = "Kenneth Sommers" } );
            _mockData.Add( new Person() { Name = "Lamar Williams" } );
            _mockData.Add( new Person() { Name = "Marsellis Wallace" } );

        }
    }
}
