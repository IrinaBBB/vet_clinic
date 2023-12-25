using API.Entities;

namespace API.Data
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            if (!context.Animals.Any())
            {

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
            }

            if (!context.Products.Any())
            {
                var productList = new List<Product>
            {
                    new Product
                    {
                        Id = 1,
                        Name = "Premium Dog Food",
                        Description = "High-quality food for dogs",
                        Price = 320,
                        PictureUrl = "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        Type = "Food",
                        Brand = "PremiumPets",
                        QuantityInStock = 50
                    },
                    new Product
                    {
                        Id = 2,
                        Name = "Catnip Toy",
                        Description = "Interactive toy for cats",
                        Price = 100,
                        PictureUrl = "https://images.unsplash.com/photo-1644509875735-694634983f40?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        Type = "Toy",
                        Brand = "MeowPlay",
                        QuantityInStock = 30
                    },
                    new Product
                    {
                        Id = 3,
                        Name = "Bird Cage",
                        Description = "Spacious cage for birds",
                        Price = 2999,
                        PictureUrl = "https://images.unsplash.com/photo-1587019572196-567a60231f1f?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        Type = "Accessories",
                        Brand = "Aviary Haven",
                        QuantityInStock = 20
                    },
                    new Product
                    {
                        Id = 4,
                        Name = "Fish Tank",
                        Description = "Aquarium for fish",
                        Price = 2499,
                        PictureUrl = "https://images.unsplash.com/photo-1550479125-d6ec537f108e?q=80&w=3527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        Type = "Aquarium",
                        Brand = "AquaWorld",
                        QuantityInStock = 15
                    },
                    new Product
                    {
                        Id = 5,
                        Name = "Small Animal Bedding",
                        Description = "Comfortable bedding for small animals",
                        Price = 999,
                        PictureUrl = "",
                        Type = "Bedding",
                        Brand = "CozyNest",
                        QuantityInStock = 40
                    },
                    new Product
                    {
                        Id = 6,
                        Name = "Reptile Heat Lamp",
                        Description = "Heat lamp for reptiles",
                        Price = 1499,
                        PictureUrl = "",
                        Type = "Heating",
                        Brand = "WarmWorld",
                        QuantityInStock = 25
                    },
                    new Product
                    {
                        Id = 7,
                        Name = "Hamster Wheel",
                        Description = "Exercise wheel for hamsters",
                        Price = 599,
                        PictureUrl = "https://images.unsplash.com/photo-1657076761228-bdb21cf0bc7c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        Type = "Toy",
                        Brand = "RunFast",
                        QuantityInStock = 35
                    },
                    new Product
                    {
                        Id = 8,
                        Name = "Turtle Food",
                        Description = "Specialized food for turtles",
                        Price = 1299,
                        PictureUrl = "",
                        Type = "Food",
                        Brand = "ShellFeast",
                        QuantityInStock = 30
                    },
                    new Product
                    {
                        Id = 9,
                        Name = "Rabbit Hutch",
                        Description = "Hutch for rabbits",
                        Price = 3499,
                        PictureUrl = "",
                        Type = "Housing",
                        Brand = "BunnyHaven",
                        QuantityInStock = 10
                    },
                    new Product
                    {
                        Id = 10,
                        Name = "Grooming Kit",
                        Description = "Kit for pet grooming",
                        Price = 1999,
                        PictureUrl = "https://images.unsplash.com/photo-1625321171045-1fea4ac688e9?q=80&w=3871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        Type = "Accessories",
                        Brand = "GroomMaster",
                        QuantityInStock = 25
                    }
        };
                foreach (var product in productList)
                {
                    context.Products.Add(product);
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
