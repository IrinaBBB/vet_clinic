import './index.css'
import Navbar from './app/layout/Navbar.tsx'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <>
            <Navbar />
            <div className="container mt-7 mx-auto">
                <Outlet />
            </div>
        </>
    )
}

export default App
