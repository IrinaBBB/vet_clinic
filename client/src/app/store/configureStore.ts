import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { petSlice } from '../../features/pets/petSlice.ts'
import { vetSlice } from '../../features/vets/vetSlice.ts'

export const store = configureStore({
    reducer: {
        pets: petSlice.reducer,
        vets: vetSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
