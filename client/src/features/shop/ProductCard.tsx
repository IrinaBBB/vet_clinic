import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Product } from '../../app/models/product.ts'
import { logo_dark } from '../../assets'

interface Props {
    product: Product
}

function ProductCard({ product }: Props) {
    const navigate = useNavigate()

    function handleClick(id: number) {
        navigate(`/products/${id}`)
    }

    function handleClick2(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation()
        //navigate(`/animals/${id}`)
        navigate(`/cart`)
    }

    return (
        <div
            onClick={() => handleClick(product.id)}
            key={product.id}
            className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:cursor-pointer"
        >
            {product.pictureUrl && (
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={product.pictureUrl}
                        className="h-full w-full object-cover"
                        alt={product.name}
                    />
                </div>
            )}
            {!product.pictureUrl && (
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-indigo-50 bg-clip-border text-gray-700">
                    <img
                        src={logo_dark}
                        className="w-[50%] opacity-30 mt-[50%] transform-tr translate-y-[-50%] bg-center mx-auto object-cover"
                        alt={product.name}
                    />
                </div>
            )}
            <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {product.name}
                    </p>
                    <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {product.price} kr
                    </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    {product.description}
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    className="block w-full select-none rounded-lg bg-indigo-600/30 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    onClick={(e) => handleClick2(e)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard
