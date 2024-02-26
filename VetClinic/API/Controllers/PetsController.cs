using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class PetsController : BaseApiController
    {
        private readonly AppDbContext _db;

        public PetsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<Pet>>> GetAnimals()
        {
            return await _db.Pets.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pet>> GetAnimal(int id)
        {
            var animal = await _db.Pets.FindAsync(id);

            if (animal != null) { 
                return animal;
            } else
            {
                return NotFound();
            }
        }
    }
}
