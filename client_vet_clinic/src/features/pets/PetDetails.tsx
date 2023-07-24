import Carousel from '../../components/Carousel.tsx'

function PetDetails() {
    const slides = [
        'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=963&q=80',
        'https://images.unsplash.com/photo-1444930694458-01babf71870c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3666&q=80',
        'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2428&q=80',
        'https://images.unsplash.com/photo-1476994230281-1448088947db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    ]
    return (
        <div className="relative">
            <div className="max-w-[400px] rounded overflow-hidden shadow-xl">
                <Carousel slides={slides} />
            </div>
        </div>
    )
}

export default PetDetails
