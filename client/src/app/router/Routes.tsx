import { createBrowserRouter, RouteObject } from 'react-router-dom'
import App from '../layout/App.tsx'
import LoginForm from '../../features/LoginForm.tsx'
import PetList from '../../features/pets/PetList.tsx'
import VetList from '../../features/vets/VetList.tsx'
import PetDetails from "../../features/pets/PetDetails.tsx";
import PetForm from "../../features/pets/PetForm.tsx";
import Catalog from "../../features/shop/Catalog.tsx";
import ProductDetails from "../../features/shop/ProductDetails.tsx";
import Cart from "../../features/shop/Cart.tsx";
import Shop from "../layout/Shop.tsx";
import AboutPage from "../../features/shop/AboutPage.tsx";
import ContactPage from "../../features/shop/ContactPage.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Shop />,
        children: [
            { path: '', element: <Catalog /> },
            { path: 'products/:id', element: <ProductDetails /> },
            { path: 'cart', element: <Cart /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> },
        ],
    },
    {
        path: '/clinic',
        element: <App />,
        children: [
            { path: '', element: <PetList /> },
            { path: 'vets', element: <VetList /> },
            { path: 'animals/:id', element: <PetDetails /> },
            { path: 'pet-form', element: <PetForm /> },
            // { path: 'catalog/:id', element: <ProductsDetails /> },
        ],
    },
    {
        path: '/login',
        element: <LoginForm />,
    },
]
export const router = createBrowserRouter(routes)
