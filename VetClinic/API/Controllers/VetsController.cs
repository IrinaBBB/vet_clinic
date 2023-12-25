using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class VetsController : BaseApiController
    {
        private readonly AppDbContext _db;

        public VetsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<Vet>>> GetVets()
        {
            return await _db.Vets.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Vet>> GetVet(int id)
        {
            var vet = await _db.Vets.FindAsync(id);

            if (vet != null) { 
                return vet;
            } else
            {
                return NotFound();
            }
        }
    }
}
