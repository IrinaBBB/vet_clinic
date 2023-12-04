using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Animal
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;
        public DateOnly DateOfBirth { get; set; }
        public bool Neutered { get; set; }
        public decimal WeightInKilos { get; set; }

        [Required]
        public string Species { get; set; } = string.Empty;
    }
}
