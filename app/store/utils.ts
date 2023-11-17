import { CryptoCurrency } from "../components/utils";

export interface RootState {
    cryptos: {
      cryptos: CryptoCurrency[];
      loading: boolean;
      error: string | null | undefined;
    };
}