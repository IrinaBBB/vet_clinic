import { router } from '../router/Routes.tsx'

function NotFound() {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8 mt-16">
            <div className="border-t border-gray-200 text-center pt-8">
                <h1 className="text-9xl  font-bold text-purple-400">404</h1>
                <h2 className="font-light py-8 pb-4">
                    <span className="mb-10 text-6xl block">oops!</span>
                    <span className="text-4xl">
                        We could not find what you are looking for :(
                    </span>
                </h2>
                <p className="text-xl mb-10 font-light">
                    The page you are looking for does not exist. It might have
                    been moved or deleted.
                </p>
                <button
                    onClick={() => router.navigate('/')}
                    className="bg-gradient-to-r from-purple-400/80 to-blue-500/80 hover:from-purple-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
                >
                    HOME
                </button>
            </div>
        </div>
    )
}

export default NotFound
