import { createSlice } from '@reduxjs/toolkit';
import { PostRegistration } from '../../api/postRegistration';


export const initialState = {
    loginUser: {
        phone: '',
        email: '',
        password: ''   
    }
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {   
    
        loginReducer: (state, action) => {
            state.loginUser.phone = action.payload.phone;
            state.loginUser.email = action.payload.email;
            state.loginUser.password = action.payload.password;
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(PostRegistration.pending, (state) => {

            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(PostRegistration.fulfilled, 
            (state, { payload }) => { 
            /* state.accessToken = payload.accessToken;
            state.expire = payload.expire; */
            state.status = "idle";
    });

        builder
        .addCase(PostRegistration.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Неправильный логин или пароль" })
            state.status = "idle";
    })
    }
});

export const { loginReducer } = authSlice.actions;