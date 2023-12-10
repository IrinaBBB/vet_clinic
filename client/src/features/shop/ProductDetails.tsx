import agent from '../../app/api/agent.ts'
import { useEffect, useState } from 'react'
import { Product } from '../../app/models/product.ts'
import { useParams } from 'react-router-dom'
import { logo_dark } from '../../assets'
import NotFound from '../../app/errors/NotFound.tsx'
import LoadingComponent from "../../app/components/LoadingComponent.tsx";

function ProductDetails() {
    debugger
    const { id } = useParams<{ id: string }>()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        id &&
            agent.Catalog.details(parseInt(id))
                .then((response) => setProduct(response))
                .catch((error) => console.log(error))
                .finally(() => setLoading(false))
    }, [id])

    if (loading) return <LoadingComponent message='Loading product ...' />
    if (!product) return <NotFound />
    return (
        <div className="w-full max-w-6xl rounded-xl mb-10 bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                    {product.pictureUrl && (
                        <img
                            src={product.pictureUrl}
                            className="w-full relative z-10 rounded-xl"
                            alt={product.name}
                        />
                    )}
                    {!product.pictureUrl && (
                        <div className="mx-4 mt-4 overflow-hidden rounded-xl bg-indigo-50">
                            <img
                                src={logo_dark}
                                className="w-[50%] opacity-30 mt-[50%] transform-tr translate-y-[-50%] bg-center mx-auto object-cover"
                                alt={product.name}
                            />
                        </div>
                    )}
                </div>
                <div className="w-full md:w-1/2 px-10">
                    <div className="mb-10">
                        <h1 className="font-bold uppercase text-2xl mb-5">
                            {product.name}
                        </h1>
                        <p className="text-sm text-gray-600">
                            {product.description}
                        </p>
                    </div>
                    <div>
                        <div className="inline-block align-bottom mr-5">
                            <span className="font-bold text-5xl leading-none align-baseline">
                                {product.price}
                            </span>
                            <span className="text-2xl leading-none align-baseline">
                                kr
                            </span>
                            {/*<span className="text-2xl leading-none align-baseline">*/}
                            {/*    .99*/}
                            {/*</span>*/}
                        </div>
                        <div className="inline-block align-bottom">
                            <button
                                className="block w-full select-none rounded-lg bg-indigo-600/30 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Buy now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
