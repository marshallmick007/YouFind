using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace YouFind.Data.Entities
{
    public partial class YouFindDBContext : DbContext
    {
        public YouFindDBContext( string connectionString) : base(connectionString)
        {

        }

        public YouFindDBContext() : base("name=YouFindDB")
        {
            
        }

        public virtual DbSet<DbPerson> People { get; set; }

        public virtual DbSet<DbInterests> Interests { get; set; }
    }
}
