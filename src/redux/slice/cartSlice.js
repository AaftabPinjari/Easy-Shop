import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cart: [],
    totalPrice: Number(0)
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            if (index >= 0) {
                return
            } else {
                state.cart.push(action.payload)
            }

        },
        removeFromCart: (state, action) => {
            // state.cart.map((product) =>)
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
    }

})

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;