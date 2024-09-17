import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Category:"All"
}

const catSlice=createSlice({
    name:"category",
    initialState,
    reducers:{
        changeCategory:(state,action)=>{
            state.Category=action.payload
        }
    }
})

export const {changeCategory}=catSlice.actions

export default catSlice.reducer;