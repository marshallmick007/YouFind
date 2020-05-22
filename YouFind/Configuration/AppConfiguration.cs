using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind.Configuration
{
    public class AppConfiguration : IAppConfiguration
    {
        public AppConfiguration()
        {

        }

        public AppConfiguration( string connectionString )
        {
            this.ConnectionString = connectionString;
        }

        public string ConnectionString { get; private set; }
    }
}
