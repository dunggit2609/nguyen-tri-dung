import React, { useEffect } from 'react'
import { WalletBalance } from '../interface'
import { fetchBalances } from '../fetcher'

const useWalletBalances = (): WalletBalance[] => {
  const [balances, setBalances] = React.useState<WalletBalance[]>([])

  // use useEffect to fetch data from API

  useEffect(async () => {
    const balances = await fetchBalances()
    if (balances.code === 200) {
      setBalances(balances.data)
    } else {
      alert(balances.message)
    }
  }, [])

  return balances
}

export default useWalletBalances