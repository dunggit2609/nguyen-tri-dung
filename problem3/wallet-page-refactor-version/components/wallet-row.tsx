import React from 'react'
interface Props {
    className?: string;
    amount: number;
    usdValue: string;
    formattedAmount: string;
}

// This code defines a React component called WalletRow. 
// This component is used to display information about a wallet entry, 
// such as the USD value, amount, and formatted amount
const WalletRow = ({ className, amount, usdValue, formattedAmount }: Props) => {
    return (
        <div className={className}>
            <span>USD: {usdValue}</span>
            <span>Amount: {amount}</span>
            <span>Formatted Amount: {formattedAmount}</span>
        </div>
    )
}

export default WalletRow