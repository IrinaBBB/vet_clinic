import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from '../App.tsx'
import LoginForm from '../app/features/LoginForm.tsx'
import PetList from '../features/pets/PetList.tsx'
import VetList from '../features/vets/VetList.tsx'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <PetList /> },
            { path: 'vets', element: <VetList /> },
        ],
    },
    {
        path: '/login',
        element: <LoginForm />,
    },
]
export const router = createBrowserRouter(routes)
