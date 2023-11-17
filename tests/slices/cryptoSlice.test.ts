import cryptoReducer, { getCryptos, initialState } from '@/app/store/slices/cryptoSlice';

describe('cryptoSlice', () => {
  // Test initial state
  it('should handle initial state', () => {
    expect(cryptoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  // Test loading state
  it('should handle getCryptos/pending action', () => {
    const action = { type: getCryptos.pending.type };
    const state = cryptoReducer(initialState, action);
    expect(state).toEqual({ ...initialState, loading: true });
  });

  // Test successful data fetching
  it('should handle getCryptos/fulfilled action', () => {
    const mockCryptoData = [{ id: 'bitcoin', name: 'Bitcoin' }];
    const action = { type: getCryptos.fulfilled.type, payload: mockCryptoData };
    const state = cryptoReducer(initialState, action);
    expect(state).toEqual({ ...initialState, cryptos: mockCryptoData, loading: false });
  });

  // Test error state
  it('should handle getCryptos/rejected action', () => {
    const error = 'Failed to fetch';
    const action = { type: getCryptos.rejected.type, error: { message: error } };
    const state = cryptoReducer(initialState, action);
    expect(state).toEqual({ ...initialState, error, loading: false });
  });
});