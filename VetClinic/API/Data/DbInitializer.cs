using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            if (!context.Pets.Any())
            {

                var Pets = new List<Pet>
            {
                new Pet
                {
                    Id = 1,
                    Name = "Max",
                    DateOfBirth = new DateOnly(2018, 5, 15),
                    Neutered = true,
                    WeightInKilos = 10.5m,
                    Species = "Dog"
                },
                new Pet
                {
                    Id = 2,
                    Name = "Luna",
                    DateOfBirth = new DateOnly(2020, 9, 22),
                    Neutered = false,
                    WeightInKilos = 7.8m,
                    Species = "Cat"
                },
                new Pet
                {
                    Id = 3,
                    Name = "Buddy",
                    DateOfBirth = new DateOnly(2019, 3, 8),
                    Neutered = true,
                    WeightInKilos = 5.2m,
                    Species = "Dog"
                },
                new Pet
                {
                    Id = 4,
                    Name = "Fluffy",
                    DateOfBirth = new DateOnly(2021, 7, 12),
                    Neutered = true,
                    WeightInKilos = 4.3m,
                    Species = "Rabbit"
                },
                new Pet
                {
                    Id = 5,
                    Name = "Whiskers",
                    DateOfBirth = new DateOnly(2017, 11, 30),
                    Neutered = false,
                    WeightInKilos = 3.1m,
                    Species = "Cat"
                },
                new Pet
                {
                    Id = 6,
                    Name = "Rocky",
                    DateOfBirth = new DateOnly(2020, 2, 18),
                    Neutered = true,
                    WeightInKilos = 8.9m,
                    Species = "Dog"
                },
                new Pet
                {
                    Id = 7,
                    Name = "Kiwi",
                    DateOfBirth = new DateOnly(2019, 8, 5),
                    Neutered = false,
                    WeightInKilos = 1.5m,
                    Species = "Bird"
                },
                new Pet
                {
                    Id = 8,
                    Name = "Spike",
                    DateOfBirth = new DateOnly(2022, 1, 25),
                    Neutered = false,
                    WeightInKilos = 6.7m,
                    Species = "Hedgehog"
                },
                new Pet
                {
                    Id = 9,
                    Name = "Bubbles",
                    DateOfBirth = new DateOnly(2021, 4, 9),
                    Neutered = true,
                    WeightInKilos = 0.9m,
                    Species = "Fish"
                },
                new Pet
                {
                    Id = 10,
                    Name = "Coco",
                    DateOfBirth = new DateOnly(2020, 6, 3),
                    Neutered = true,
                    WeightInKilos = 2.4m,
                    Species = "Hamster"
                }
            };

                foreach (var Pet in Pets)
                {
                    context.Pets.Add(Pet);
                }
            }

         
            if (!context.Vets.Any())
            {
                List<Vet> vetList = new List<Vet>
            {
                new Vet
                {
                    Id = 1,
                    Name = "Dr. Alex Johnson",
                    DateOfBirth = new DateOnly(1985, 5, 15),
                    DateOfGraduation = new DateOnly(2010, 6, 20)
                },
                new Vet
                {
                    Id = 2,
                    Name = "Dr. Emily Davis",
                    DateOfBirth = new DateOnly(1988, 8, 25),
                    DateOfGraduation = new DateOnly(2013, 7, 10)
                },
                new Vet
                {
                    Id = 3,
                    Name = "Dr. Michael Wilson",
                    DateOfBirth = new DateOnly(1982, 4, 10),
                    DateOfGraduation = new DateOnly(2007, 5, 5)
                },
                new Vet
                {
                    Id = 4,
                    Name = "Dr. Sophia Brown",
                    DateOfBirth = new DateOnly(1987, 12, 30),
                    DateOfGraduation = new DateOnly(2012, 3, 18)
                },
                new Vet
                {
                    Id = 5,
                    Name = "Dr. William Martinez",
                    DateOfBirth = new DateOnly(1984, 11, 20),
                    DateOfGraduation = new DateOnly(2009, 8, 8)
                },
                new Vet
                {
                    Id = 6,
                    Name = "Dr. Olivia Garcia",
                    DateOfBirth = new DateOnly(1989, 2, 5),
                    DateOfGraduation = new DateOnly(2014, 9, 30)
                },
                new Vet
                {
                    Id = 7,
                    Name = "Dr. Ethan Miller",
                    DateOfBirth = new DateOnly(1983, 10, 12),
                    DateOfGraduation = new DateOnly(2008, 11, 22)
                },
                new Vet
                {
                    Id = 8,
                    Name = "Dr. Ava Thompson",
                    DateOfBirth = new DateOnly(1986, 6, 8),
                    DateOfGraduation = new DateOnly(2011, 12, 5)
                },
                new Vet
                {
                    Id = 9,
                    Name = "Dr. James Hernandez",
                    DateOfBirth = new DateOnly(1990, 9, 18),
                    DateOfGraduation = new DateOnly(2015, 4, 15)
                },
                new Vet
                {
                    Id = 10,
                    Name = "Dr. Emma Wilson",
                    DateOfBirth = new DateOnly(1981, 7, 22),
                    DateOfGraduation = new DateOnly(2006, 2, 28)
                }
            };
                foreach (var vet in vetList)
                {
                    context.Vets.Add(vet);
                }
            }
            context.SaveChanges();
        }
    }
}
