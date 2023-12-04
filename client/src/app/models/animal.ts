export interface Animal {
    id: number;
    name: string;
    dateOfBirth: string; // DateOnly in C# can be represented as a string in TypeScript
    neutered: boolean;
    weightInKilos: number;
    species: string;
}