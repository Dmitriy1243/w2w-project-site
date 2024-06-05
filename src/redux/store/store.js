import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authCreateSlice } from '../slices/authCreateSlice';
import { informationSlice } from '../slices/informationSlice';
import { authRegistrationSlice } from '../slices/authRegistrationSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authCreateExtraReducer']
};

const reducer = combineReducers({
    authCreateExtraReducer: authCreateSlice.reducer,
    statusCreateUserReducer: authCreateSlice.reducer,
    statusLoadNullReducer: authCreateSlice.reducer,
    modalPersonalDatalReducer: informationSlice.reducer,
    authRegistrationExtraReducer: authRegistrationSlice.reducer,
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