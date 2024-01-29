import '../../index.css'
import { Outlet } from 'react-router-dom'
import ShopNavbar from './ShopNavbar.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAppDispatch } from '../store/configureStore.ts'
import { useEffect, useState } from 'react'
import { getCookie } from '../util/util.ts'
import agent from '../api/agent.ts'
import LoadingComponent from '../components/LoadingComponent.tsx'
import { setCart } from '../../features/shop/cart/cartSlice.ts'

function Shop() {
    const dispatch = useAppDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const buyerId = getCookie('buyerId')
        if (buyerId) {
            agent.Cart.get()
                .then((cart) => dispatch(setCart(cart)))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
        } else {
            setLoading(false)
        }
    }, [dispatch])

    if (loading)
        return <LoadingComponent message="Initializing app..." dark={false} />

    return (
        <>
            <ToastContainer
                position="bottom-right"
                hideProgressBar
                theme="colored"
            />
            <ShopNavbar />
            <div className="container mt-7 mx-auto">
                <Outlet />
            </div>
        </>
    )
}

export default Shop
