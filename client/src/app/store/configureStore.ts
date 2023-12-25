import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { cartSlice } from '../../features/shop/cart/cartSlice.ts'
import { petSlice } from '../../features/clinic/pets/petSlice.ts'

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        pets: petSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
