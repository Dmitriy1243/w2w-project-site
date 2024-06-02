import { createAsyncThunk } from '@reduxjs/toolkit';

export const PostRegistration = createAsyncThunk(
    "auth/postAuth", 
    async ({phoneNumber, email, password}, thunkApi) => { 
//https://dipdeepcode.ru/api/auth/create
//https://212.109.223.138:8090/api/auth/register
        const response = await fetch(`https:///dipdeepcode.ru/api/auth/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type',
                'Access-Control-Allow-Methods' :'PUT, GET, POST, DELETE, OPTIONS'
            },
        body: JSON.stringify({
            phoneNumber: phoneNumber,
                email: email,
                password: password
                })
        });

        const data = await response.json();
    
        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({
                message: "Faild request"
            });
        }
    
        return data;
    }
);