import ProductCard from './ProductCard.tsx'
import { useEffect, useState } from 'react'
import { Product } from '../../app/models/product.ts'
import agent from '../../app/api/agent.ts'

function Catalog() {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        agent.Catalog.list().then((products) => setProducts(products))
    }, [])
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
    )
}

export default Catalog
