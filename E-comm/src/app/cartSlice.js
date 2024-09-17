import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        reducers: {
            addToCart: (state, action) => {
                const existingItem = state.items.find(item => item.id === action.payload.id);
                if (!existingItem) {
                    state.items.push(action.payload);
                }
            },
            removeFromCart: (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            },
            clearCart: (state) => {
                state.items = [];
            },
        },
    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;