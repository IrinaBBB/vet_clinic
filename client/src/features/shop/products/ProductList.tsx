import ProductCard from './ProductCard.tsx'
import { useEffect } from 'react'
import LoadingComponent from '../../../app/components/LoadingComponent.tsx'
import {
    useAppDispatch,
    useAppSelector,
} from '../../../app/store/configureStore.ts'
import { fetchProductsAsync, productSelectors } from './productSlice.ts'

function ProductList() {
    const products = useAppSelector(productSelectors.selectAll)
    const { productsLoaded, status } = useAppSelector((state) => state.products)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!productsLoaded) dispatch(fetchProductsAsync())
    }, [productsLoaded, dispatch])

    if (status.includes('pending'))
        return <LoadingComponent message="Loading products..." dark={false} />

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    )
}

export default ProductList
