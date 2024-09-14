import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchValue: "Latest"
};

const newsSlice = createSlice({
    name: "newsSlice",
    initialState,
    reducers: {
        receiveVal: (state, action) => {
            state.searchValue = action.payload;
        }
    }
});

export const { receiveVal } = newsSlice.actions;
export default newsSlice.reducer;
