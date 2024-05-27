import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { preAuthSlice } from '../slices/preAuthSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: []//'preAuthExtraReducer'
};

const reducer = combineReducers({
    preAuthExtraReducer: preAuthSlice.reducer,
    loginReducer: preAuthSlice.reducer,
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