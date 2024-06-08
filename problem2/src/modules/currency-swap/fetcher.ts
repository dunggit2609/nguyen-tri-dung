import { Currency } from "./interface";

export const getListCurrencyOptions = async (): Promise<Currency[]> => {
  const res = await fetch("https://interview.switcheo.com/prices.json");
  const data = await res.json();
  return data as Currency[];
};
