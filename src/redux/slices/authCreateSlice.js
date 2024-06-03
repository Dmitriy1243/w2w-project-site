import { createSlice } from '@reduxjs/toolkit';
import { PostAuthCreate } from '../../api/postAuthCreate';


export const initialState = {
    statusCreateUser: '',
};

export const authCreateSlice = createSlice({
    name: "authCreate",
    initialState,
    reducers: {   
    
        statusCreateUserReducer: (state, action) => {
            
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(PostAuthCreate.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(PostAuthCreate.fulfilled, 
            (state, { payload }) => { 
            state.status = "idle";
    });

        builder
        .addCase(PostAuthCreate.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; 
            state.status = "idle";
    })
    }
});

export const { statusCreateUserReducer } = authCreateSlice.actions;