using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class DBContext:DbContext 
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options) 
        {
            
        }

        public DbSet<UsuarioModel> Usuario { get; set; }
    }
}
