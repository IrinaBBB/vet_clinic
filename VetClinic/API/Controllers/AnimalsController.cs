using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AnimalsController : BaseApiController
    {
        private readonly AppDbContext _db;

        public AnimalsController(AppDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public async Task<ActionResult<List<Animal>>> GetAnimals()
        {
            return await _db.Animals.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Animal>> GetAnimal(int id)
        {
            var animal = await _db.Animals.FindAsync(id);

            if (animal != null) { 
                return animal;
            } else
            {
                return NotFound();
            }
        }
    }
}
