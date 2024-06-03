import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
    isActivModal: false,
    isOpenUserAgreements: false,
    isOpenPolicyProcessingData: false,
};

export const informationSlice = createSlice({
    name: "click",
    initialState,
    reducers: {   
    
        modalPersonalDatalReducer: (state, action) => {
            state.isActivModal = action.payload;
        },

        openUserAgreementsReducer: (state, action) => {
            state.isOpenUserAgreements = action.payload;
        },

        openPolicyProcessingDataReducer: (state, action) => {
            state.isOpenPolicyProcessingData = action.payload;
        },
    },
});

export const { modalPersonalDatalReducer, openUserAgreementsReducer, openPolicyProcessingDataReducer } = informationSlice.actions;