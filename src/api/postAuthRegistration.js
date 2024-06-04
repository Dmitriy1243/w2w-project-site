import { createAsyncThunk } from '@reduxjs/toolkit';

export const postAuthRegistration = createAsyncThunk(
    "authRegistration/postAuthRegistration", 
    async (verificationСode, {rejectWithValue}) => { 

try {
        const response = await fetch(`https://dipdeepcode.ru/api/auth/register?passcode=${verificationСode}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type',
                'Access-Control-Allow-Methods' :'PUT, GET, POST, DELETE, OPTIONS'
            },
        });

        if(!response.ok) {
            throw new Error('Something went wrong!');
        }
        const data = response.status;
        console.log(data)
            return data;

}catch(error) {
    return rejectWithValue(error.message);
        }
    }
);