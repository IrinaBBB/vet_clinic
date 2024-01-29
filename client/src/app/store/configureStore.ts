import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { cartSlice } from '../../features/shop/cart/cartSlice.ts'
import { petSlice } from '../../features/clinic/pets/petSlice.ts'
import { vetSlice } from '../../features/clinic/vets/vetSlice.ts'
import { productSlice } from '../../features/shop/products/productSlice.ts'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        pets: petSlice.reducer,
        vets: vetSlice.reducer,
        products: productSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
