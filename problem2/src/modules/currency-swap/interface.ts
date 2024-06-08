export interface Currency {
  currency: string;
  date: string;
  price: number;
}

export interface CurrencyForm {
  source_currency: number;
  target_currency: number;
  source_currency_type: string;
  target_currency_type: string;
}
