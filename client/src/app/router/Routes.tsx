import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import NotFound from '../errors/NotFound.tsx'
import ServerError from '../errors/ServerError.tsx'
import PetList from '../../features/pets/PetList.tsx'
import App from '../layout/App.tsx'
import VetList from '../../features/vets/VetList.tsx'
import PetDetails from "../../features/pets/PetDetails.tsx";
import LoginForm from "../../features/LoginForm.tsx";
import VetDetails from "../../features/vets/VetDetails.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <PetList /> },
            { path: '/pets/:id', element: <PetDetails /> },
            { path: '/vets', element: <VetList /> },
            { path: '/vets/:id', element: <VetDetails /> },
            { path: '/server-error', element: <ServerError /> },
            { path: '/not-found', element: <NotFound /> },
            { path: '*', element: <Navigate replace to="/not-found" /> },
        ],
    },
    {
        path: '/login',
        element: <LoginForm />,
    },
]
export const router = createBrowserRouter(routes)
