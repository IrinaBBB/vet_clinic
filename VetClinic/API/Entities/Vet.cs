using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Vet
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        public DateOnly DateOfBirth { get; set; }
        public DateOnly DateOfGraduation { get; set; }

    }
}

