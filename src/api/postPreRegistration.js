import { createAsyncThunk } from '@reduxjs/toolkit';

export const postPreRegistration = createAsyncThunk(
    "preAuth/postAuth", 
    async ({username, password}, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

        const response = await fetch(`http://212.109.223.138:8090/api/auth/register`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
                })
        });

        const data = await response.json();
        
        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Неправильный " 
            });
        }
    
        return data; // возврвщвет данные при успешном запросе
    }
);