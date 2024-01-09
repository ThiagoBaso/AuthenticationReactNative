using api.Data;
using api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly DBContext _dbContext;
        public UsuarioController(DBContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        public async Task<UsuarioModel> AddUser(UsuarioModel user)
        {
            await _dbContext.Usuario.AddAsync(user);
            await _dbContext.SaveChangesAsync();

            return user;
        }
    }
}
