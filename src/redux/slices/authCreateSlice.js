import { createSlice } from '@reduxjs/toolkit';
import { postAuthCreate } from '../../api/postAuthCreate';


export const initialState = {
    statusCreateUser: '',
    status: null,
    error: null,
};

export const authCreateSlice = createSlice({
    name: "authCreate",
    initialState,
    reducers: {   
    
    },

    extraReducers: (builder) => {
        builder
        .addCase(postAuthCreate.pending, (state) => {
            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(postAuthCreate.fulfilled, 
            (state, action) => { 
            state.status = "resolved";
            state.error = null;
            state.statusCreateUser = action.payload;
    });

        builder
        .addCase(postAuthCreate.rejected, 
            (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
    })
    }
});

export const { statusCreateUserReducer } = authCreateSlice.actions;