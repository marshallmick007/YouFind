using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YouFind.Configuration
{
    public interface IAppConfiguration
    {
        string ConnectionString { get; }
    }
}
