import { configureStore } from "@reduxjs/toolkit";
//we exported default so dont use curly braces here 
//to imprt the reducer
import productReducer from "./slice/productSlice"
import categoryReducer from "./slice/categorySlice";
import cartReducer from "./slice/cartSlice"


export const store = configureStore({
    reducer: {
        // this key value pair is important to remember while using
        //useSelector hook to access the state
        products: productReducer,
        categories: categoryReducer,
        cart: cartReducer,
    }
})