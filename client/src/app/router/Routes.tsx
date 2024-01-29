import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import ClinicApp from '../layout/App.tsx'
import LoginForm from '../../features/LoginForm.tsx'
import PetList from '../../features/clinic/pets/PetList.tsx'
import VetList from '../../features/clinic/vets/VetList.tsx'
import PetDetails from '../../features/clinic/pets/PetDetails.tsx'
import PetForm from '../../features/clinic/pets/PetForm.tsx'
import VetDetails from '../../features/clinic/vets/VetDetails.tsx'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <ClinicApp />,
        children: [
            { path: '', element: <PetList /> },
            { path: 'vets', element: <VetList /> },
            { path: 'vets/:id', element: <VetDetails /> },
            { path: 'animals/:id', element: <PetDetails /> },
            { path: 'pet-form', element: <PetForm /> },
            { path: '*', element: <Navigate replace to="/not-found" /> },
        ],
    },
    {
        path: '/login',
        element: <LoginForm />,
    },
]
export const router = createBrowserRouter(routes)
