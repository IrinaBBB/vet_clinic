namespace Domain
{
    public class Animal
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Species { get; set; }
        public bool Neutered { get; set; }
        public decimal WeightKilos { get; set; }

    }
}
