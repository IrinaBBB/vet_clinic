import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from '../layout/App.tsx'
import LoginForm from '../../features/LoginForm.tsx'
import PetList from '../../features/pets/PetList.tsx'
import VetList from '../../features/vets/VetList.tsx'
import PetDetails from "../../features/pets/PetDetails.tsx";
import PetForm from "../../features/pets/PetForm.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <PetList /> },
            { path: 'vets', element: <VetList /> },
            { path: 'animals/:id', element: <PetDetails /> },
            { path: 'pet-form', element: <PetForm /> },
        ],
    },
    {
        path: '/login',
        element: <LoginForm />,
    },
]
export const router = createBrowserRouter(routes)
