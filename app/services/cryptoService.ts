import { CryptoCurrency, CryptoGlobalStats } from '@/app/components/utils';


const BASE_URL = ' https://api.coinlore.net/api';

async function fetchData(url: string, errorMsg: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(errorMsg);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const getCryptos = async (): Promise<CryptoCurrency[]> => {
  const result = await fetchData(`${BASE_URL}/tickers/`, 'Error fetching crypto data');
  return result.data || [];
};

export const getGlobalCryptoData = async (): Promise<CryptoGlobalStats> => {
  const result = await fetchData(`${BASE_URL}/global/`, 'Error fetching global crypto data');
  return result[0] || {} as CryptoGlobalStats;
};
