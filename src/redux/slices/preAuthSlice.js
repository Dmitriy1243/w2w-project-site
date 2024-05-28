import { createSlice } from '@reduxjs/toolkit';
import { postPreRegistration } from '../../api/postPreRegistration';


export const initialState = {
    loginUser: {
        username: '',  
        password: ''   
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
            state.loginUser.username = action.payload.username;
            state.loginUser.password = action.payload.password;
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(postPreRegistration.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(postPreRegistration.fulfilled, 
            (state, { payload }) => { 
    
            /* state.accessToken = payload.accessToken;
            state.expire = payload.expire; */
            state.status = "idle";
    });

        builder
        .addCase(postPreRegistration.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Неправильный логин или пароль" })
            state.status = "idle";
    })
    }
});

export const { loginReducer } = preAuthSlice.actions;