import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCryptos as getCryptosService } from '../../services/cryptoService';
import { CryptoCurrency } from '@/app/components/utils';

// Define thunk
export const getCryptos = createAsyncThunk(
  'cryptos/getCryptos',
  async () => {
    const response = await getCryptosService();
    return response;
  }
);

// initial state
export const initialState = {
  cryptos: [] as CryptoCurrency[],
  loading: false,
  error: null as string | null | undefined,
};


export const cryptoSlice = createSlice({
  name: 'cryptos',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCryptos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCryptos.fulfilled, (state, action) => {
        state.cryptos = action.payload;
        state.loading = false;
      })
      .addCase(getCryptos.rejected, (state, action) => {
        state.error = action.error.message || null;
        state.loading = false;
      });
  },
});

export default cryptoSlice.reducer;