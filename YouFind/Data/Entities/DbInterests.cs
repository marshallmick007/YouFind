using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind.Data.Entities
{
    [Table("Interests")]
    public class DbInterests
    {
        //[Key]
        public int Id { get; set; }

        [ForeignKey("Person")]
        public int PersonId { get; set; }

        public string Interest { get; set; }

        public virtual DbPerson Person { get; set; }
    }
}
