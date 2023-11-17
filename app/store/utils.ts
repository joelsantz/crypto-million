import { CryptoCurrency, CryptoGlobalStats } from "../components/utils";

export interface RootState {
    cryptos: {
      cryptos: CryptoCurrency[];
      loading: boolean;
      error: string | null | undefined;
    };
    globalCrypto: {
      data: CryptoGlobalStats | null;
      loading: boolean;
      error: string | null | undefined;
    };
}