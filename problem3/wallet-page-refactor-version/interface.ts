// This file will be used to define all the interfaces that use for this page
// if I have more custom interface for each component 
// I will placed it as the component it belonged to 
export interface WalletBalance {
  currency: string;
  amount: number;

  // add new field bloackchain
  blockchain: string;
}

// add 1 more interface for formatted wallet balance
export interface FormattedWalletBalance extends WalletBalance {
  formatted: string;
  usdValue: string;
}

export interface ResponseAPI {
  code: number;
  message: string;
}

export interface FetchWalletBalancesResponse extends ResponseAPI {
  data: WalletBalance[];
}

export interface CurrencyPrice {
  currency_name: string;
  price: number;
}

export interface FetchCurrencyPricesResponse extends ResponseAPI {
  data: CurrencyPrice[];
}

export interface BoxProps {
  
}