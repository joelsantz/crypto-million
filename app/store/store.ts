import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './slices/cryptoSlice';
import globalCryptoReducer from './slices/globalCryptoSlice';


export const store = configureStore({
  reducer: {
    cryptos: cryptoReducer,
    globalCrypto: globalCryptoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;