import '../../index.css'
import Navbar from './Navbar.tsx'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ToastContainer
                position="bottom-right"
                hideProgressBar
                theme="colored"
            />
            <Navbar />
            <div className="container mt-7 mx-auto">
                <Outlet />
            </div>
        </QueryClientProvider>
    )
}

export default App
