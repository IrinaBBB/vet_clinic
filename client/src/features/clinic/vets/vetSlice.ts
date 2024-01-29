import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { Vet } from '../../../app/models/vet.ts'
import agent from '../../../app/api/agent.ts'
import { RootState } from '../../../app/store/configureStore.ts'

const vetsAdapter = createEntityAdapter<Vet>()

export const fetchVetsAsync = createAsyncThunk<Vet[]>(
    'vets/fetchProductsAsync',
    async (_, thunkAPI) => {
        try {
            return await agent.Vets.list()
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    },
)

export const fetchVetAsync = createAsyncThunk<Vet, number>(
    'vets/fetchVetAsync',
    async (vetId, thunkAPI) => {
        try {
            return await agent.Vets.details(vetId)
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    },
)

export const vetSlice = createSlice({
    name: 'vets',
    initialState: vetsAdapter.getInitialState({
        vetsLoaded: false,
        status: 'idle',
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchVetsAsync.pending, (state) => {
            state.status = 'pendingFetchVets'
        })
        builder.addCase(fetchVetsAsync.fulfilled, (state, action) => {
            vetsAdapter.setAll(state, action.payload)
            state.status = 'idle'
            state.vetsLoaded = true
        })
        builder.addCase(fetchVetsAsync.rejected, (state) => {
            state.status = 'idle'
        })
        builder.addCase(fetchVetAsync.pending, (state) => {
            state.status = 'pendingFetchProduct'
        })
        builder.addCase(fetchVetAsync.fulfilled, (state, action) => {
            vetsAdapter.upsertOne(state, action.payload)
            state.status = 'idle'
        })
        builder.addCase(fetchVetAsync.rejected, (state) => {
            state.status = 'idle'
        })
    },
})

export const vetSelectors = vetsAdapter.getSelectors(
    (state: RootState) => state.vets,
)
