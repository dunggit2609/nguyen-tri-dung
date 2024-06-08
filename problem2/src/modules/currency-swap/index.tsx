import React, { useEffect, useState } from 'react'
import CurrencyField from './components/currency-field'
import { Currency, CurrencyForm } from './interface'
import { getListCurrencyOptions } from './fetcher'
import { initialFormValue } from './variables'

const CurrencySwap = () => {
    const [currencyOptions, setCurrencyOptions] = useState<Currency[]>([])
    const [formData, setFormData] = useState<CurrencyForm>(initialFormValue)

    useEffect(() => {
        const getOptions = async () => {
            const response = await getListCurrencyOptions()

            setCurrencyOptions(response)
        }
        getOptions()
        return () => {
            setCurrencyOptions([])
        }
    }, [])

    const handleSubmit = () => {
        const sourceCurrency = currencyOptions.find((currency) => currency.currency === formData.source_currency_type)
        const targetCurrency = currencyOptions.find((currency) => currency.currency === formData.target_currency_type)
        if (!sourceCurrency || !targetCurrency) {
            window.alert('Currency not found')
            return
        }

        const sourcePrice = sourceCurrency.price * formData.source_currency

        const targetAmount = sourcePrice / targetCurrency.price
        setFormData({
            ...formData,
            target_currency: Number(targetAmount.toFixed(2)),
        })

    }



    return (
        <div>
            <form action='#' method='#' className='currency-swap-form'>
                <CurrencyField
                    currencyInputName='source_currency'
                    currencyTypeName='source_currency_type'
                    currencyTypeOptions={currencyOptions}
                    formData={formData}
                    onChangeFormData={setFormData}
                />
                <button type='button' className='swap-button' onClick={handleSubmit}>
                    <img src='src/assets/swap-horizontal.svg' alt='swap' width={16} height={16} />
                    Exchange
                </button>
                <CurrencyField
                    currencyInputName='target_currency'
                    currencyTypeName='target_currency_type'
                    currencyTypeOptions={currencyOptions}
                    formData={formData}
                    onChangeFormData={setFormData}
                    disabledInput
                />


            </form>
        </div>
    )
}

export default CurrencySwap