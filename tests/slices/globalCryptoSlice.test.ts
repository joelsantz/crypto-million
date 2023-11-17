import globalCryptoReducer, { fetchGlobalCryptoData, initialState } from '@/app/store/slices/globalCryptoSlice';

describe('globalCryptoSlice', () => {
  // Test initial state
  it('should handle initial state', () => {
    expect(globalCryptoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  // Test loading state
  it('should handle fetchGlobalCryptoData/pending action', () => {
    const action = { type: fetchGlobalCryptoData.pending.type };
    const state = globalCryptoReducer(initialState, action);
    expect(state).toEqual({ ...initialState, loading: true });
  });

  // Test successful data fetching
  it('should handle fetchGlobalCryptoData/fulfilled action', () => {
    const mockGlobalCryptoData = { coins_count: 5000, total_market_cap: '1T' };
    const action = { type: fetchGlobalCryptoData.fulfilled.type, payload: mockGlobalCryptoData };
    const state = globalCryptoReducer(initialState, action);
    expect(state).toEqual({ ...initialState, data: mockGlobalCryptoData, loading: false });
  });

  // Test error state
  it('should handle fetchGlobalCryptoData/rejected action', () => {
    const error = 'Error al cargar los datos globales';
    const action = { type: fetchGlobalCryptoData.rejected.type, error: { message: error } };
    const state = globalCryptoReducer(initialState, action);
    expect(state).toEqual({ ...initialState, error, loading: false });
  });
});