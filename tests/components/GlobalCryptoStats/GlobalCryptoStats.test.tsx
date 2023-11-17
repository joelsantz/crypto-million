import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { GlobalCryptoStats } from '@/app/components/GlobalCryptoStats';
import { initialState as globalCryptoInitialState } from '@/app/store/slices/globalCryptoSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('GlobalCryptoStats', () => {
  it('renders loading state initially', () => {
    const store = mockStore({
      globalCrypto: {
        ...globalCryptoInitialState,
        loading: true,
      },
    });

    render(
      <Provider store={store}>
        <GlobalCryptoStats />
      </Provider>
    );

    expect(screen.getByText(/loading global info.../i)).toBeInTheDocument();
  });

  it('renders error message if there is an error', () => {
    const store = mockStore({
      globalCrypto: {
        ...globalCryptoInitialState,
        error: 'Error fetching data',
      },
    });

    render(
      <Provider store={store}>
        <GlobalCryptoStats />
      </Provider>
    );

    expect(screen.getByText(/error loading global info./i)).toBeInTheDocument();
  });

  it('renders global crypto stats when data is available', () => {
    const store = mockStore({
      globalCrypto: {
        ...globalCryptoInitialState,
        data: {
          coins_count: 5000,
          active_markets: 300,
          total_mcap: '1T',
          total_volume: '500B',
        },
      },
    });

    render(
      <Provider store={store}>
        <GlobalCryptoStats />
      </Provider>
    );

    expect(screen.getByText(/total coins/i)).toBeInTheDocument();
    expect(screen.getByText(/active markets/i)).toBeInTheDocument();
    expect(screen.getByText(/total market cap/i)).toBeInTheDocument();
    expect(screen.getByText(/total volume/i)).toBeInTheDocument();
    expect(screen.getByText('5000')).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();
    expect(screen.getByText('$1T')).toBeInTheDocument();
    expect(screen.getByText('$500B')).toBeInTheDocument();
  });
});