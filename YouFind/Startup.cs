using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.IO;
using System.Reflection;
using YouFind.Configuration;

namespace YouFind
{
    public class Startup
    {
        public Startup( IConfiguration configuration )
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices( IServiceCollection services )
        {
            services.AddMvc().SetCompatibilityVersion( CompatibilityVersion.Version_2_1 );


            // Normally you would have a more enterprisey way to read database
            // connection strings from, but to make sure this app works on 
            // machines other than my own, we recompute the MDF file path here
            string connectionString = BuildConnectionString();

            AppConfiguration appConfig = new AppConfiguration( connectionString );
            services.AddSingleton<IAppConfiguration>( appConfig );

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles( configuration =>
             {
                 configuration.RootPath = "ClientApp/dist";
             } );
        }

        private string BuildConnectionString()
        {
            string retval = string.Empty;
            string connStringFormat = "data source=(localdb)\\mssqllocaldb;AttachDbFilename={0}\\YouFind.mdf;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework";
            string appPath = Path.GetDirectoryName( Assembly.GetExecutingAssembly().Location );

            string path = Path.Combine( appPath, "..\\..\\..\\App_Data" );

            DirectoryInfo directory = new DirectoryInfo( path );

            if ( directory.Exists )
            {
                retval = string.Format( connStringFormat, directory.FullName );
            }


            return retval;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure( IApplicationBuilder app, IHostingEnvironment env )
        {
            if ( env.IsDevelopment() )
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler( "/Error" );
            }

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseLoggingMiddleware();

            //app.UseErrorHandlerMiddleware();

            app.UseUnreliableNetworkSimulatorMiddleware();

            app.UseMvc( routes =>
             {
                 routes.MapRoute(
                     name: "default",
                     template: "{controller}/{action=Index}/{id?}" );
             } );

            app.UseSpa( spa =>
             {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                 if ( env.IsDevelopment() )
                 {
                     spa.UseAngularCliServer( npmScript: "start" );
                 }
             } );

            
        }
    }
}
