import { getCryptos, getGlobalCryptoData } from '@/app/services/cryptoService';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('cryptoService', () => {
  describe('getCryptos', () => {
    it('fetches cryptos successfully', async () => {
      const mockCryptosData = { data: [{ id: 'bitcoin', name: 'Bitcoin' }] };
      fetchMock.mockResponseOnce(JSON.stringify(mockCryptosData));

      const cryptos = await getCryptos();

      expect(fetchMock).toHaveBeenCalledWith(' https://api.coinlore.net/api/tickers/');
      expect(cryptos).toEqual(mockCryptosData.data);
    });

    it('throws an error when the fetch fails', async () => {
      const errorMessage = 'Failed to fetch';
      fetchMock.mockReject(new Error(errorMessage));

      await expect(getCryptos()).rejects.toThrow(errorMessage);
    });
  });

  describe('getGlobalCryptoData', () => {
    it('fetches global crypto stats successfully', async () => {
      const mockGlobalStatsData = [{ coins_count: 5000 }];
      fetchMock.mockResponseOnce(JSON.stringify(mockGlobalStatsData));

      const globalStats = await getGlobalCryptoData();

      expect(fetchMock).toHaveBeenCalledWith(' https://api.coinlore.net/api/global/');
      expect(globalStats).toEqual(mockGlobalStatsData[0]);
    });

    it('throws an error when the fetch fails', async () => {
      const errorMessage = 'Failed to fetch';
      fetchMock.mockReject(new Error(errorMessage));

      await expect(getGlobalCryptoData()).rejects.toThrow(errorMessage);
    });
  });
});
