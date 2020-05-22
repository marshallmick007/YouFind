using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Xml.Schema;
using YouFind.Configuration;

namespace YouFind.Data.Entities
{
    public class DatabaseSeeder
    {
        #region Interests
        public static readonly string[] INTERESTS = new string[] {
            "3D printing",
"Acrobatics",
"Acting",
"Amateur radio",
"Animation",
"Aquascaping",
"Astrology",
"Astronomy",
"Baking",
"Baton twirling",
"Blogging",
"Building",
"Board/tabletop games",
"Book discussion clubs",
"Book restoration",
"Bowling",
"Brazilian jiu-jitsu",
"Breadmaking",
"Bullet journaling",
"Cabaret",
"Calligraphy",
"Candle making",
"Candy making",
"Car fixing & building",
"Card games",
"Cheesemaking",
"Cleaning",
"Clothesmaking",
"Coffee roasting",
"Collecting",
"Coloring",
"Computer programming",
"Confectionery",
"Cooking",
"Cosplaying",
"Couponing",
"Craft",
"Creative writing",
"Crocheting",
"Cross-stitch",
"Crossword puzzles",
"Cryptography",
"Cue sports",
"Dance",
"Digital arts",
"Distro Hopping",
"DJing",
"Do it yourself",
"Drama",
"Drawing",
"Drink mixing",
"Electronic games",
"Electronics",
"Embroidery",
"Experimenting",
"Fantasy sports",
"Fashion",
"Fashion design",
"Fishkeeping",
"Flower arranging",
"Fly tying",
"Foreign language learning",
"Furniture building",
"Gaming",
"Genealogy",
"Gingerbread house making",
"Glassblowing",
"Graphic design",
"Gunsmithing",
"Gymnastics",
"Hacking",
"Herp keeping",
"Home improvement",
"Homebrewing",
"Houseplant care",
"Hula hooping",
"Hydroponics",
"Ice skating",
"Jewelry making",
"Jigsaw puzzles",
"Journaling",
"Juggling",
"Karaoke",
"Karate",
"Kendama",
"Knife making",
"Knitting",
"Knot tying",
"Kombucha brewing",
"Lace making",
"Lapidary",
"Leather crafting",
"Lego building",
"Lock picking",
"Listening to music",
"Listening to podcasts",
"Machining",
"Macrame",
"Magic",
"Makeup",
"Mazes",
"Metalworking",
"Model building",
"Model engineering",
"Nail art",
"Needlepoint",
"Origami",
"Painting",
"Palmistry",
"Pet adoption & fostering",
"Philately",
"Photography",
"Practical jokes",
"Pressed flower craft",
"Playing musical instruments",
"Poi",
"Pottery",
"Powerlifting",
"Puzzles",
"Quilling",
"Quilting",
"Quizzes",
"Rail transport modeling",
"Rapping",
"Reading",
"Refinishing",
"Reiki",
"Robot combat",
"Rubik's Cube",
"Scrapbooking",
"Sculpting",
"Sewing",
"Shoemaking",
"Singing",
"Sketching",
"Soapmaking",
"Social media",
"Stand-up comedy",
"Stamp collecting",
"Table tennis",
"Tarot",
"Taxidermy",
"Thrifting",
"Video editing",
"Video game developing",
"Video gaming",
"Watching movies",
"Watching television",
"Weaving",
"Weight training",
"Welding",
"Whittling",
"Wikipedia editing",
"Winemaking",
"Wood carving",
"Woodworking",
"Worldbuilding",
"Writing",
"Word searches",
"Yo-yoing",

        };
        #endregion

        private IAppConfiguration _appConfiguration;
        public DatabaseSeeder(IAppConfiguration configuration)
        {
            _appConfiguration = configuration;
        }

        public void SeedDatabase()
        {
            string appPath = Path.GetDirectoryName( Assembly.GetExecutingAssembly().Location );
            string seedFile = Path.Combine( appPath, "seed.csv" );

            if ( System.IO.File.Exists( seedFile ) )
            {
                string[] lines = System.IO.File.ReadAllLines( seedFile );

                using ( var db = new YouFindDBContext( _appConfiguration.ConnectionString ) )
                {
                    for ( int i = 0; i < lines.Length; i++ )
                    {
                        string[] toks = lines[ i ].Split( ',' );
                        if ( toks.Length == 8 )
                        {
                            string first = toks[ 0 ];
                            string last = toks[ 1 ];
                            var existing = db.People.Where( x => x.FirstName == first && x.LastName == last ).FirstOrDefault();
                            if ( existing == null )
                            {
                                DbPerson p = new DbPerson();
                                p.FirstName = toks[ 0 ];
                                p.LastName = toks[ 1 ];
                                p.DateOfBirth = GetDate( toks[ 2 ] );
                                p.AddressLine1 = toks[ 3 ];
                                p.AddressLine2 = toks[ 4 ];
                                p.City = toks[ 5 ];
                                p.State = toks[ 6 ];
                                p.PostalCode = toks[ 7 ];
                                
                                FillInterests( p );

                                db.People.Add( p );
                                db.SaveChanges();
                                
                            }

                        }
                    }
                }
            }
        }

        private void FillInterests( DbPerson person )
        {
            var interests = GenerateInterests();

            foreach( var i in interests )
            {
                person.Interests.Add( new DbInterests() { Interest = i } );
            }

        }

        private List<string> GenerateInterests()
        {
            HashSet<string> interests = new HashSet<string>();
            Random r = new Random( (int)DateTime.Now.Ticks );
            var total = r.Next( 5, 15 );

            while ( interests.Count() < total )
            {
                var next = INTERESTS[ r.Next( 0, INTERESTS.Length - 1 ) ];
                if ( !interests.Contains( next ) )
                {
                    interests.Add( next );
                }
            }

            return interests.ToList();
        }

        private DateTime GetDate( string date )
        {
            DateTime retval = DateTime.MinValue;

            DateTime.TryParse( date, out retval );

            return retval;
        }
    }
}
