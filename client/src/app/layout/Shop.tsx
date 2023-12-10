import '../../index.css'
import { Outlet } from 'react-router-dom'
import ShopNavbar from './ShopNavbar.tsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
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

export default App
