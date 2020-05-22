using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace XUnit.YouFind
{
    public class DBDriverTest
    {
        [Fact]
        public void can_connect_to_database()
        {
            var db = new global::YouFind.Data.Entities.YouFindDBContext();

            var set = db.People.Count( x => x.Id > 0);
        }
    }
}
