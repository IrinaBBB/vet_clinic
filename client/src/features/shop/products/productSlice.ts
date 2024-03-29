import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { Product } from '../../../app/models/product.ts'
import agent from '../../../app/api/agent.ts'
import { RootState } from '../../../app/store/configureStore.ts'

const productsAdapter = createEntityAdapter<Product>()

export const fetchProductsAsync = createAsyncThunk<Product[]>(
    'catalog/fetchProductsAsync',
    async (_, thunkAPI) => {
        try {
            return await agent.ProductList.list()
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    },
)

export const fetchProductAsync = createAsyncThunk<Product, number>(
    'catalog/fetchProductAsync',
    async (productId, thunkAPI) => {
        try {
            return await agent.ProductList.details(productId)
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    },
)

export const productSlice = createSlice({
    name: 'catalog',
    initialState: productsAdapter.getInitialState({
        productsLoaded: false,
        status: 'idle',
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductsAsync.pending, (state) => {
            state.status = 'pendingFetchProducts'
        })
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            productsAdapter.setAll(state, action.payload)
            state.status = 'idle'
            state.productsLoaded = true
        })
        builder.addCase(fetchProductsAsync.rejected, (state) => {
            state.status = 'idle'
        })
        builder.addCase(fetchProductAsync.pending, (state) => {
            state.status = 'pendingFetchProduct'
        })
        builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
            productsAdapter.upsertOne(state, action.payload)
            state.status = 'idle'
        })
        builder.addCase(fetchProductAsync.rejected, (state) => {
            state.status = 'idle'
        })
    },
})

export const productSelectors = productsAdapter.getSelectors(
    (state: RootState) => state.products,
)
