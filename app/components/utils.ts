export interface CryptoCurrency {
    id: string;
    name: string;
    symbol: string;
    price_usd: string;
    percent_change_24h: string;
  }

  export interface CryptoGlobalStats {
    coins_count: number;
    active_markets: number;
    total_mcap: number;
    total_volume: number;
  }

  export const ITEMS_PER_PAGE = 24;