import React, { useEffect } from 'react'
import { CurrencyPrice } from '../interface'
import { fetchCurrenciesPrice } from '../fetcher'



const useCurrencyPrice = (): CurrencyPrice[] => {
  const [currenciesPrice, setCurrenciesPrice] = React.useState<CurrencyPrice[]>([])

  useEffect(async () => {
    const currenciesPrice = await fetchCurrenciesPrice()
    if (currenciesPrice.code === 200) {
      setCurrenciesPrice(currenciesPrice.data)
    } else {
      alert(currenciesPrice.message)
    }
  }, [])

  return currenciesPrice
}

export default useCurrencyPrice