import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authSlice } from '../slices/authSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authExtraReducer']
};

const reducer = combineReducers({
    authExtraReducer: authSlice.reducer,
    loginReducer: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);