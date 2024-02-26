import {createAsyncThunk, createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import { Pet } from '../../app/models/pet.ts'
import agent from '../../app/api/agent.ts'
import {RootState} from "../../app/store/configureStore.ts";

const petsAdapter = createEntityAdapter<Pet>()

export const fetchPetsAsync = createAsyncThunk<Pet[]>(
    'pets/fetchPetsAsync',
    async (_, thunkAPI) => {
        try {
            return await agent.Pets.list()
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    },
)

export const fetchPetAsync = createAsyncThunk<Pet, number>(
    'pets/fetchPetAsync',
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
    extraReducers: (builder => {
        builder.addCase(fetchPetsAsync.pending, (state) => {
            state.status = 'pendingFetchPets'
        })
        builder.addCase(fetchPetsAsync.fulfilled, (state, action) => {
            petsAdapter.setAll(state, action.payload)
            state.status = 'idle'
            state.petsLoaded = true
        })
        builder.addCase(fetchPetsAsync.rejected, (state, action) => {
            console.log(action.payload)
            state.status = 'idle'
        })
        builder.addCase(fetchPetAsync.pending, (state) => {
            state.status = 'pendingFetchPet'
        })
        builder.addCase(fetchPetAsync.fulfilled, (state, action) => {
            petsAdapter.upsertOne(state, action.payload)
            state.status = 'idle'
        })
        builder.addCase(fetchPetAsync.rejected, (state, action) => {
            console.log(action)
            state.status = 'idle'
        })
    }),
})

export const petSelectors = petsAdapter.getSelectors((state: RootState) => state.pets)
