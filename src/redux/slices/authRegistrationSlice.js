import { createSlice } from '@reduxjs/toolkit';
import { postAuthRegistration } from '../../api/postAuthRegistration';


export const initialState = {
    statusRegistrationUser: '',
    statusLoadRegister: null,
    errorLoadRegister: null,
};

export const authRegistrationSlice = createSlice({
    name: "authRegistration",
    initialState,
    reducers: {   
    
    },

    extraReducers: (builder) => {
        builder
        .addCase(postAuthRegistration.pending, (state) => {
            state.statusLoadRegister = "loading";
            state.errorLoadRegister = null;
    });

        builder
        .addCase(postAuthRegistration.fulfilled, 
            (state, action) => { 
            state.statusLoadRegister = "resolved";
            state.errorLoadRegister = null;
            state.statusRegistrationUser = action.payload;
    });

        builder
        .addCase(postAuthRegistration.rejected, 
            (state, action) => {
                state.statusLoadRegister = "rejected";
                state.errorLoadRegister = action.payload;
    })
    }
});

export const {} = authRegistrationSlice.actions;