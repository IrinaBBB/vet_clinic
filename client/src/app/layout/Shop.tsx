import '../../index.css'
import { Outlet } from 'react-router-dom'
import ShopNavbar from "./ShopNavbar.tsx";

function App() {
    return (
        <>
            <ShopNavbar />
            <div className="container mt-7 mx-auto">
                <Outlet />
            </div>
        </>
    )
}

export default App
