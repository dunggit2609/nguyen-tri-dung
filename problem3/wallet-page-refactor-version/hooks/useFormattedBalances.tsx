import { useMemo } from 'react'
import { FormattedWalletBalance, WalletBalance } from '../interface'
import useWalletBalances from './useWalletBalances'
import { getPriority } from '../utils'
import useCurrencyPrice from './usePrices'

const useFormattedBalances = (): FormattedWalletBalance[] => {
    const originalBalances = useWalletBalances()
    const prices = useCurrencyPrice();

    // remove prices from dependencies because it not affect to result of useMemo
    const formattedBalances: FormattedWalletBalance[] = useMemo(
        () => originalBalances.filter((balance: WalletBalance) => {
            const balancePriority = getPriority(balance.blockchain);
            // update condition to balancePriority > -99 instead of && balance.amount <= 0
            // lhsPriority > -99
            if (balancePriority > -99 && balance.amount <= 0) {
                return true;
            }
            return false
        }).sort((lhs: WalletBalance, rhs: WalletBalance) => {
            const leftPriority = getPriority(lhs.blockchain);
            const rightPriority = getPriority(rhs.blockchain);
            // leftPriority > rightPriority ~> return -1
            // lhsPriority < rhsPriority ~> return 1
            // mean that the larger should come before the smaller
            // so I return rightPriority - leftPriority
            // mean that if leftPriority >  rightPriority ~> result is negative
            // leftPriority < ~> return is positive
            // My solution is the same as logic of first but shorten
            return rightPriority - leftPriority;
        }).map((balance: WalletBalance) => {
            return {
                ...balance,
                formatted: balance.amount.toFixed(2),
                usdValue: (prices[balance.currency] * balance.amount).toFixed(2),
            }
        }), [originalBalances]);

    return formattedBalances
}
export default useFormattedBalances;