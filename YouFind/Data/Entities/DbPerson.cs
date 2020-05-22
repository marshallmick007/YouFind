using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind.Data.Entities
{
    [Table("People")]
    public class DbPerson
    {
        public DbPerson()
        {
            this.Interests = new HashSet<DbInterests>();
        }

        //[Key]
        public int Id { get; set; }

        [StringLength(50)]
        public string FirstName { get; set; }

        [StringLength( 50 )]
        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }

        [StringLength( 50 )]
        public string AddressLine1 { get; set; }

        [StringLength( 50 )]
        public string AddressLine2 { get; set; }

        [StringLength( 20 )]
        public string City { get; set; }

        [StringLength( 2 )]
        public string State { get; set; }

        [StringLength( 5 )]
        public string PostalCode { get; set; }

        public virtual ICollection<DbInterests> Interests { get; set; }

    }
}
