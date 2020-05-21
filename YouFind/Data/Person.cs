using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind.Data
{
    public class Person
    {
        public Person()
        {
            this.Address = new Address();
            this.Interests = new List<string>();
        }

        public string Id { get; set; }

        public string Name { get; set; }

        public Address Address { get; set; }

        public int Age { get; set; }

        public List<string> Interests { get; set; }

        public string Avatar { get; set; }
    }
}
