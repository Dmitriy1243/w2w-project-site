import { createSlice } from '@reduxjs/toolkit';
import { PostPreRegistration } from '../../api/postPreRegistration';


export const initialState = {
    loginUser: {
        phone: '',  
        email: ''   
    }
    /* accessToken: '',
    expire: '',
    isActivated: false,
    loginField: '',
    passwordField: '',
    loginError: ' ',   
    passwordError: ' ', 
    validForm: false,
    isActivatedBurgerMenu: false, */
};

export const preAuthSlice = createSlice({
    name: "preAuth",
    initialState,
    reducers: {   
    
        loginReducer: (state, action) => {
            state.loginUser.phone = action.payload.phone;
            state.loginUser.email = action.payload.email;
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(PostPreRegistration.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(PostPreRegistration.fulfilled, 
            (state, { payload }) => { 
    
            /* state.accessToken = payload.accessToken;
            state.expire = payload.expire; */
            state.status = "idle";
    });

        builder
        .addCase(PostPreRegistration.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Неправильный логин или пароль" })
            state.status = "idle";
    })
    }
});

export const { loginReducer } = preAuthSlice.actions;