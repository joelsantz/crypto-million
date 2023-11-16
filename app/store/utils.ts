import { CryptoCurrency } from "../components/CrytoList/utils";

export interface RootState {
    cryptos: {
      cryptos: CryptoCurrency[];
      loading: boolean;
      error: string | null | undefined;
    };
}