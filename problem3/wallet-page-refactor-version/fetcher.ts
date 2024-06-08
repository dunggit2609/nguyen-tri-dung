import { FetchCurrencyPricesResponse, FetchWalletBalancesResponse } from "./interface";

// Those functions are use sample url to fetch data
// I defined it to demo how we can handle a API request
// With more complex request like must to attach token to header from cookie
// or handle refresh token or anything more
// I will choose axios to implement interceptor easily and
// Create one singleton instance to use for whole the app
export const fetchBalances = async (): Promise<FetchWalletBalancesResponse> => {
  const res = await fetch("https://example.com/balances");
  const data = await res.json();
  return data;
};

export const fetchCurrenciesPrice = async (): Promise<FetchCurrencyPricesResponse> => {
  const res = await fetch("https://example.com/prices");
  const data = await res.json();
  return data;
};
