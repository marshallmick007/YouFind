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
            _mockData.Add( new Person() { Id = "1", Name = "Abigail Smith" } );
            _mockData.Add( new Person() { Id = "2", Name = "Ben Aberdeen" } );
            _mockData.Add( new Person() { Id = "3", Name = "Clark Kent" } );
            _mockData.Add( new Person() { Id = "4", Name = "Dilbert" } );
            _mockData.Add( new Person() { Id = "5", Name = "Edgar Kensington" } );
            _mockData.Add( new Person() { Id = "6", Name = "Fats Waller" } );
            _mockData.Add( new Person() { Id = "7", Name = "George Costanza" } );
            _mockData.Add( new Person() { Id = "8", Name = "Homer Simpson" } );
            _mockData.Add( new Person() { Id = "9", Name = "Isabelle Bellini" } );
            _mockData.Add( new Person() { Id = "10", Name = "Jake Silar" } );
            _mockData.Add( new Person() { Id = "11", Name = "Kenneth Sommers" } );
            _mockData.Add( new Person() { Id = "12", Name = "Lamar Williams" } );
            _mockData.Add( new Person() { Id = "13", Name = "Marsellis Wallace" } );

        }
    }
}
