import { createSlice } from '@reduxjs/toolkit';
import { postAuthCreate } from '../../api/postAuthCreate';


export const initialState = {
    statusCreateUser: '',
    statusLoadCreate: null,
    errorLoadCreate: null,
};

export const authCreateSlice = createSlice({
    name: "authCreate",
    initialState,
    reducers: {   

        statusLoadNullReducer: (state, action) => {
            state.statusLoadCreate = null;
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(postAuthCreate.pending, (state) => {
            state.statusLoadCreate = "loading";
            state.errorLoadCreate = null;
    });

        builder
        .addCase(postAuthCreate.fulfilled, 
            (state, action) => { 
            state.statusLoadCreate = "resolved";
            state.errorLoadCreate = null;
            state.statusCreateUser = action.payload;
    });

        builder
        .addCase(postAuthCreate.rejected, 
            (state, action) => {
            state.statusLoadCreate = "rejected";
            state.errorLoadCreate = action.payload;
    })
    }
});

export const { statusLoadNullReducer } = authCreateSlice.actions;