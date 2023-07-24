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

export const slides = [
    'https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    'https://images.unsplash.com/photo-1558788353-f76d92427f16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1038&q=80',
    'https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80'
]


// export const slides = [
//     'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=963&q=80',
//     'https://images.unsplash.com/photo-1444930694458-01babf71870c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3666&q=80',
//     'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2428&q=80',
//     'https://images.unsplash.com/photo-1476994230281-1448088947db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
// ]
