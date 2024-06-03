import { createAsyncThunk } from '@reduxjs/toolkit';

export const postAuthCreate = createAsyncThunk(
    "authCreate/postAuthCreate", 
    async ({phoneNumber, email, password}, {rejectWithValue}) => { 

//https://212.109.223.138:8090/api/auth/register
try {
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
        
        if(!response.ok) {
            throw new Error('Something went wrong!');
        }
        const data = response.status;

            return data;

}catch(error) {
    return rejectWithValue(error.message);
        }
    }
);