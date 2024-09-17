import { configureStore } from "@reduxjs/toolkit";
import catReducer from "./catSlice"
import cartReducer from "./cartSlice"
export const store=configureStore({
    reducer:{
        category:catReducer,
        cart: cartReducer
    }
})
