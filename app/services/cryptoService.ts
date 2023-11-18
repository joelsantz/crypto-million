import { CryptoCurrency, CryptoGlobalStats } from '@/app/components/utils';

// Defines the base URL for the CoinLore cryptocurrency API.
const BASE_URL = ' https://api.coinlore.net/api';

// Defines an asynchronous utility function to fetch data from a given URL.
async function fetchData(url: string, errorMsg: string) {
  try {
    const response = await fetch(url);

    // Check for a successful response, otherwise throw an error.
    if (!response.ok) throw new Error(errorMsg);

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// If the fetch fails or returns no data, an empty array is returned.
export const getCryptos = async (): Promise<CryptoCurrency[]> => {
  const result = await fetchData(`${BASE_URL}/tickers/`, 'Error fetching crypto data');
  return result.data || [];
};

// If the fetch fails or returns no data, an empty object is returned.
export const getGlobalCryptoData = async (): Promise<CryptoGlobalStats> => {
  const result = await fetchData(`${BASE_URL}/global/`, 'Error fetching global crypto data');
  return result[0] || {} as CryptoGlobalStats;
};
