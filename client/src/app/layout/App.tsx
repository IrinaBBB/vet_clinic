import '../../index.css'
import Navbar from './Navbar.tsx'
import { Outlet } from 'react-router-dom'
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
            <Navbar />
            <div className="container mt-7 mx-auto">
                <Outlet />
            </div>
        </>
    )
}

export default App
