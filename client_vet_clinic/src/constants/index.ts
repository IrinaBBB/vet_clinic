export interface NavigationLink {
    id: string
    title: string
    path: string
}

export const navLinks: NavigationLink[] = [
    {
        id: 'vets',
        title: 'Vets',
        path: '/vets'
    },
    {
        id: 'pets',
        title: 'Pets',
        path: '/'
    },
]


export const pets = [
    {
        id: 1,
        name: 'Lad',
        species: 'Dog',
        sex: 'male',
        dateOfBirth: '13.02.2020',
        neutered: true,
        weight: 3.0
    },
    {
        id: 2,
        name: 'Inka',
        species: 'Cat',
        sex: 'female',
        dateOfBirth: '17.09.2022',
        neutered: true,
        weight: 3.5
    },
    {
        id: 3,
        name: 'Dundy',
        species: 'Dog',
        sex: 'male',
        dateOfBirth: '13.02.2021',
        neutered: false,
        weight: 4.0
    },
    {
        id: 4,
        name: 'Urshy',
        species: 'Cat',
        sex: 'male',
        dateOfBirth: '13.02.2019',
        neutered: true,
        weight: 4.0
    },
    {
        id: 5,
        name: 'Sebastian',
        species: 'Dog',
        sex: 'male',
        dateOfBirth: '21.06.2018',
        neutered: true,
        weight: 6.0
    },
]
