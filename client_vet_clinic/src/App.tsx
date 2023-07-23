import './index.css'
import Navbar from './app/layout/Navbar.tsx'
import PetList from './features/pets/PetList.tsx'

function App() {
    return (
        <>
            <Navbar />
            <div className="container mt-7 mx-auto">
                <PetList />
            </div>
        </>
    )
}

export default App
