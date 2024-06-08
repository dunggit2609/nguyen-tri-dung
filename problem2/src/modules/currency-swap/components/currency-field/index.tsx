import React, { Dispatch } from 'react'
import SelectCurrencyTye from './select-currency-type'
import { Currency, CurrencyForm } from '../../interface'
import CurrencyInput from './input'

interface Props {
    currencyTypeName: string;
    currencyTypeOptions: Currency[];
    currencyInputName: string;
    formData: CurrencyForm;
    onChangeFormData: Dispatch<React.SetStateAction<CurrencyForm>>;
    disabledInput?: boolean;
}
const CurrencyField = ({ currencyTypeName, currencyInputName, currencyTypeOptions, formData, onChangeFormData, disabledInput }: Props) => {

    return (
        <div className='currency-field'>
            <SelectCurrencyTye name={currencyTypeName} data={currencyTypeOptions}
                formData={formData} onChangeFormData={onChangeFormData} />
            <CurrencyInput name={currencyInputName} disabledInput={disabledInput}
                formData={formData} onChangeFormData={onChangeFormData} />
        </div>
    )
}

export default CurrencyField