import { createAsyncThunk } from '@reduxjs/toolkit';

export const PostRegistration = createAsyncThunk(
    "auth/postAuth", 
    async ({username, password}, thunkApi) => { 

        const response = await fetch(`http://212.109.223.138:8090/api/auth/register`, {
            method: 'POST',
            //mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',

                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type',
                'Access-Control-Allow-Methods' :'PUT, GET, POST, DELETE, OPTIONS'
            },
            body: JSON.stringify({
                username: username,
                password: password
                })
        });

        const data = await response.json();
        
        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({
            //message: "Неправильный " 
            });
        }
    
        return data;
    }
);