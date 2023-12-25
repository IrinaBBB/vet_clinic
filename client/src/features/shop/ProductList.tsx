import ProductCard from './cart/ProductCard.tsx'
import { useEffect, useState } from 'react'
import { Product } from '../../app/models/product.ts'
import agent from '../../app/api/agent.ts'
import LoadingComponent from '../../app/components/LoadingComponent.tsx'

function ProductList() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        agent.Catalog.list()
            .then((products) => setProducts(products))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoadingComponent message="Loading products..." />

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    )
}

export default ProductList
