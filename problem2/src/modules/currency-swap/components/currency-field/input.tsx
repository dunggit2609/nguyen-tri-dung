import React, { Dispatch, useMemo } from 'react'
import { CurrencyForm } from '../../interface';

interface Props {
    placeholder?: string
    name: string;
    formData: CurrencyForm;
    onChangeFormData: Dispatch<React.SetStateAction<CurrencyForm>>;
    disabledInput?: boolean;

}


const CurrencyInput = ({ placeholder = "Input amount of currency", name, formData, onChangeFormData, disabledInput }: Props) => {
    const inputValue = useMemo(() => formData[name as keyof CurrencyForm], [formData, name])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeFormData({ ...formData, [name]: e.target.value })
    }

    return (
        <div className='currency-input-container'>
            <label htmlFor={name}>Amount</label>
            <input disabled={disabledInput} type='number' id={name} className='currency-input' placeholder={placeholder} name={name} value={inputValue}
                onChange={onChange} />
        </div>

    )
}

export default CurrencyInput