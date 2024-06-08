//import React and its dependencies
import React from 'react';
import useFormattedBalances from './hooks/useFormattedBalances';
import { BoxProps, FormattedWalletBalance } from './interface';
import WalletRow from './components/wallet-row';



interface Props extends BoxProps {
    children?: React.ReactNode;
}
const classes = {
    row: 'row'
}
const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    const balances = useFormattedBalances();

    return (
        <div {...rest}>
            {balances.map((balance: FormattedWalletBalance, index: number) => {

                return (
                    <WalletRow
                        className={classes.row}
                        // because this list not change about position or length
                        // so we can use key as index
                        key={index}
                        amount={balance.amount}
                        usdValue={balance.usdValue}
                        formattedAmount={balance.formatted}
                    />
                )
            })}
        </div>
    )
}

export default WalletPage;