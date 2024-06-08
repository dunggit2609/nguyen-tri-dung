interface WalletBalance {
    currency: string;
    amount: number;

    // Add blockchain property, blockchain: string; because we need to sort by priority
}
interface FormattedWalletBalance {
    currency: string;
    amount: number;
    formatted: string;
}

// we need to define the interface for the box props
interface Props extends BoxProps {
    // add props children: React.ReactNode;
}
const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    // we need to define hooks useWalletBalances and usePrices hooks
    // instead of call hook `usePrices` in component
    // we should call it in `useFormattedBalances` hook 
    // because the `prices` value is only used in `useFormattedBalances` hook to calculate
    // usdValue of list balances and the `balances` only be used as the original balance
    // not be used as the last value for render
    // For more detail you can view in `wallet-page-refactor-version/hooks`
    const balances = useWalletBalances();
    const prices = usePrices();

    // we need to define the classes variables to define class for component

    // getPriority function we should move it to utils file or put it outside the component
    // because it is not needed for re-create this each time component re-render
    const getPriority = (blockchain: any): number => {
        switch (blockchain) {
            case 'Osmosis':
                return 100
            case 'Ethereum':
                return 50
            case 'Arbitrum':
                return 30
            case 'Zilliqa':
                return 20
            case 'Neo':
                return 20
            default:
                return -99
        }
    }

    // we should create the `useFormattedBalances` to calculate sortedBalances
    // with formatted amount and usdValue
    const sortedBalances = useMemo(() => {
        return balances.filter((balance: WalletBalance) => {
            const balancePriority = getPriority(balance.blockchain);
            // we should use condition balancePriority > -99 
            // instead of lhsPriority > -99
            if (lhsPriority > -99) {
                if (balance.amount <= 0) {
                    return true;
                }
            }
            return false
        }).sort((lhs: WalletBalance, rhs: WalletBalance) => {
            const leftPriority = getPriority(lhs.blockchain);
            const rightPriority = getPriority(rhs.blockchain);

            // we should use condition  rightPriority - leftPriority
            // for sort descending instead of use so complex condition below
            if (leftPriority > rightPriority) {
                return -1;
            } else if (rightPriority > leftPriority) {
                return 1;
            }
        });
    }, [balances, prices]);

    // instead of create new variable for formattedBalances
    // we should put the map function in useMemo calculate `sortedBalances`
    const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
        return {
            ...balance,
            formatted: balance.amount.toFixed()
        }
    })

    // instead of create the rows variable which return the components
    // we should calculate usdValue in useMemo with the `sortedBalances` and `formattedBalances`
    // after that we use calculated data with complete fields to render `WalletRow` component
    const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
            <WalletRow
                className={classes.row}
                key={index}
                amount={balance.amount}
                usdValue={usdValue}
                formattedAmount={balance.formatted}
            />
        )
    })

    return (
        <div {...rest}>
            {/* Instead of render the array components we should loop for calculated data*/}
            {/* and render the component with complete fields */}
            {rows}
        </div>
    )
}