import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isActivModal: false,
};

export const informationSlice = createSlice({
    name: "click",
    initialState,
    reducers: {   
    
        modalReducer: (state, action) => {
            state.isActivModal = action.payload;
        },
    },
});

export const { modalReducer } = informationSlice.actions;