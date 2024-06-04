import { createSlice } from '@reduxjs/toolkit';
import { postAuthRegistration } from '../../api/postAuthRegistration';


export const initialState = {
    statusRegistrationUser: '',
    status: null,
    error: null,
};

export const authRegistrationSlice = createSlice({
    name: "authRegistration",
    initialState,
    reducers: {   
    
    },

    extraReducers: (builder) => {
        builder
        .addCase(postAuthRegistration.pending, (state) => {
            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(postAuthRegistration.fulfilled, 
            (state, action) => { 
            state.status = "resolved";
            state.error = null;
            state.statusRegistrationUser = action.payload;
    });

        builder
        .addCase(postAuthRegistration.rejected, 
            (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
    })
    }
});

export const {} = authRegistrationSlice.actions;