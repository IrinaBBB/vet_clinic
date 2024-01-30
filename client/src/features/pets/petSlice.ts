import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { Animal } from '../../app/models/animal.ts'
import agent from '../../../app/api/agent.ts'
import { RootState } from '../../../app/store/configureStore.ts'

const petsAdapter = createEntityAdapter<Animal>()

export const fetchAnimalsAsync = createAsyncThunk<Animal[]>(
    'pets/fetchProductsAsync',
    async (_, thunkAPI) => {
        try {
            return await agent.Pets.list()
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    },
)

export const fetchPetAsync = createAsyncThunk<Animal, number>(
    'catalog/fetchPetAsync',
    async (petId, thunkAPI) => {
        try {
            return await agent.Pets.details(petId)
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    },
)

export const petSlice = createSlice({
    name: 'pets',
    initialState: petsAdapter.getInitialState({
        petsLoaded: false,
        status: 'idle',
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAnimalsAsync.pending, (state) => {
            state.status = 'pendingFetchPets'
        })
        builder.addCase(fetchAnimalsAsync.fulfilled, (state, action) => {
            petsAdapter.setAll(state, action.payload)
            state.status = 'idle'
            state.petsLoaded = true
        })
        builder.addCase(fetchAnimalsAsync.rejected, (state) => {
            state.status = 'idle'
        })
        builder.addCase(fetchPetAsync.pending, (state) => {
            state.status = 'pendingFetchProduct'
        })
        builder.addCase(fetchPetAsync.fulfilled, (state, action) => {
            petsAdapter.upsertOne(state, action.payload)
            state.status = 'idle'
        })
        builder.addCase(fetchPetAsync.rejected, (state) => {
            state.status = 'idle'
        })
    },
})

export const petSelectors = petsAdapter.getSelectors(
    (state: RootState) => state.pets,
)
