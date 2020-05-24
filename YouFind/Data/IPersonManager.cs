using System.Collections.Generic;

namespace YouFind.Data
{
    public interface IPersonManager
    {
        List<Person> Search( string searchTerm );
    }
}