using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace YouFind.Configuration
{
    public class UnreliableNetworkSimulator : INetworkSimulator
    {
        private readonly Random _random = new Random( (int)DateTime.Now.TimeOfDay.TotalMilliseconds );

        public void SimulateNetworkLatency()
        {
            // Randomly wait for a bit to simulate slow network
            int chooser = _random.Next( 0, 20 );
            if ( chooser % 4 == 0 )
            {
                Thread.Sleep( 3000 );
            }

        }
    }
}
