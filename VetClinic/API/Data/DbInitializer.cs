using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            if (context.Animals.Any()) return;

            var animals = new List<Animal>
            {
                new Animal
                {
                    Id = 1,
                    Name = "Max",
                    DateOfBirth = new DateOnly(2018, 5, 15),
                    Neutered = true,
                    WeightInKilos = 10.5m,
                    Species = "Dog"
                },
                new Animal
                {
                    Id = 2,
                    Name = "Luna",
                    DateOfBirth = new DateOnly(2020, 9, 22),
                    Neutered = false,
                    WeightInKilos = 7.8m,
                    Species = "Cat"
                },
                new Animal
                {
                    Id = 3,
                    Name = "Buddy",
                    DateOfBirth = new DateOnly(2019, 3, 8),
                    Neutered = true,
                    WeightInKilos = 5.2m,
                    Species = "Dog"
                },
                // Additional animals
                new Animal
                {
                    Id = 4,
                    Name = "Fluffy",
                    DateOfBirth = new DateOnly(2021, 7, 12),
                    Neutered = true,
                    WeightInKilos = 4.3m,
                    Species = "Rabbit"
                },
                new Animal
                {
                    Id = 5,
                    Name = "Whiskers",
                    DateOfBirth = new DateOnly(2017, 11, 30),
                    Neutered = false,
                    WeightInKilos = 3.1m,
                    Species = "Cat"
                },
                new Animal
                {
                    Id = 6,
                    Name = "Rocky",
                    DateOfBirth = new DateOnly(2020, 2, 18),
                    Neutered = true,
                    WeightInKilos = 8.9m,
                    Species = "Dog"
                },
                new Animal
                {
                    Id = 7,
                    Name = "Kiwi",
                    DateOfBirth = new DateOnly(2019, 8, 5),
                    Neutered = false,
                    WeightInKilos = 1.5m,
                    Species = "Bird"
                },
                new Animal
                {
                    Id = 8,
                    Name = "Spike",
                    DateOfBirth = new DateOnly(2022, 1, 25),
                    Neutered = false,
                    WeightInKilos = 6.7m,
                    Species = "Hedgehog"
                },
                new Animal
                {
                    Id = 9,
                    Name = "Bubbles",
                    DateOfBirth = new DateOnly(2021, 4, 9),
                    Neutered = true,
                    WeightInKilos = 0.9m,
                    Species = "Fish"
                },
                new Animal
                {
                    Id = 10,
                    Name = "Coco",
                    DateOfBirth = new DateOnly(2020, 6, 3),
                    Neutered = true,
                    WeightInKilos = 2.4m,
                    Species = "Hamster"
                }
            };

            foreach (var animal in animals)
            {
                context.Animals.Add(animal);
            }

            context.SaveChanges();
        }
    }
}
