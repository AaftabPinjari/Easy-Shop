import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//this will be the initial state of the store
const initialState = {
    isLoaing: false,
    categories: [],
    isError: false
}

//action to fetch the todos
export const fetchCategories = createAsyncThunk("fetchCategories",
    async () => {
        const response = await fetch('https://dummyjson.com/products/categories')
        return response.json()
    })





//name is imortant
const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {

    },
    //extra reducers is a callback function that will handle
    //the three stages of a promise in javascript
    //PENDING , FULFILLED , REJECTED
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoaing = true
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoaing = false,
                state.categories = action.payload
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            console.log("error", action.payload)
            state.isError = true
        })

    }
})


export default categorySlice.reducer;