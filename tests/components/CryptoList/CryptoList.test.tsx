import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '@/app/store/slices/cryptoSlice';
import { CryptoList } from '@/app/components/CrytoList';


const store = configureStore({
  reducer: {
    cryptos: cryptoReducer,
  },
  preloadedState: {
    cryptos: {
      cryptos: [],
      loading: false,
      error: null,
    },
  },
});

describe('CryptoList', () => {
  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <CryptoList />
      </Provider>
    );

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

});