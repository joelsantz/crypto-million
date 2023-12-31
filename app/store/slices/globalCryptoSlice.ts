import { CryptoGlobalStats } from '@/app/components/utils';
import { getGlobalCryptoData } from '@/app/services/cryptoService';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// initial state
export const initialState = {
  data: null as CryptoGlobalStats | null,
  loading: false,
  error: null as string | null | undefined,
};

// Define thunk
export const fetchGlobalCryptoData = createAsyncThunk(
  'globalCrypto/fetchGlobalData',
  async () => {
    const response = await getGlobalCryptoData();
    return response;
  }
);

export const globalCryptoSlice = createSlice({
  name: 'globalCrypto',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGlobalCryptoData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGlobalCryptoData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchGlobalCryptoData.rejected, (state) => {
        state.error = 'Error al cargar los datos globales';
        state.loading = false;
      });
  },
});

export default globalCryptoSlice.reducer;