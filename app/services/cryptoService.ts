import { CryptoCurrency, CryptoGlobalStats } from '@/app/components/utils';


const BASE_URL = ' https://api.coinlore.net/api';

export const getCryptos = async (): Promise<CryptoCurrency[]> => {
    try {
      const response = await fetch(`${BASE_URL}/tickers/`);
      if (!response.ok) {
        throw new Error('Error al obtener las criptomonedas');
      }
      const result = await response.json();
      const data: CryptoCurrency[] = result.data;
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  export const getGlobalCryptoData = async (): Promise<CryptoGlobalStats> => {
    try {
      const response = await fetch(`${BASE_URL}/global/`);
      if (!response.ok) {
        throw new Error('Error al obtener datos globales de criptomonedas');
      }
      const result = await response.json();
      return result[0];
    } catch (error) {
      console.error(error);
      return {} as CryptoGlobalStats;
    }
  };
