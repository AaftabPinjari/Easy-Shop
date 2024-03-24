import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//this will be the initial state of the store
const initialState = {
    isLoaing: false,
    products: [],
    isError: false
}

//action to fetch the todos
export const fetchProducts = createAsyncThunk("fetchTodos",
    //async call back function for API calling    
    async () => {
        const response = await fetch('https://dummyjson.com/products?limit=100')
        return response.json()
    }
)





//name is imortant
const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    //extra reducers is a callback function that will handle
    //the three stages of a promise in javascript
    //PENDING , FULFILLED , REJECTED
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoaing = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoaing = false,
                state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log("error", action.payload)
            state.isError = true
        })

    }
})


export default productSlice.reducer;