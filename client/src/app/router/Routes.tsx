import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import ClinicApp from '../layout/App.tsx'
import LoginForm from '../../features/LoginForm.tsx'
import PetList from '../../features/clinic/pets/PetList.tsx'
import VetList from '../../features/clinic/vets/VetList.tsx'
import PetDetails from '../../features/clinic/pets/PetDetails.tsx'
import PetForm from '../../features/clinic/pets/PetForm.tsx'
import ProductList from '../../features/shop/ProductList.tsx'
import ProductDetails from '../../features/shop/ProductDetails.tsx'
import ShopApp from '../layout/Shop.tsx'
import AboutPage from '../../features/shop/AboutPage.tsx'
import ContactPage from '../../features/shop/contact/ContactPage.tsx'
import NotFound from '../errors/NotFound.tsx'
import ServerError from '../errors/ServerError.tsx'
import CartPage from '../../features/shop/cart/CartPage.tsx'

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <ShopApp />,
        children: [
            { path: '', element: <ProductList /> },
            { path: 'products/:id', element: <ProductDetails /> },
            { path: 'cart', element: <CartPage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> },
            { path: 'not-found', element: <NotFound /> },
            { path: 'server-error', element: <ServerError /> },
            { path: '*', element: <Navigate replace to="/not-found" /> },
        ],
    },
    {
        path: '/clinic',
        element: <ClinicApp />,
        children: [
            { path: '', element: <PetList /> },
            { path: 'vets', element: <VetList /> },
            { path: 'animals/:id', element: <PetDetails /> },
            { path: 'pet-form', element: <PetForm /> },
            // { path: 'catalog/:id', element: <ProductsDetails /> },
            { path: '*', element: <Navigate replace to="/not-found" /> },
        ],
    },
    {
        path: '/login',
        element: <LoginForm />,
    },
]
export const router = createBrowserRouter(routes)
