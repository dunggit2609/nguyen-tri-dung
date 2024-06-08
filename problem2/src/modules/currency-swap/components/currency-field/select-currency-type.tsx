import { Dispatch, useEffect, useMemo, useRef, useState } from "react";
import { Currency, CurrencyForm } from "../../interface";
import { currencyIconDomain } from "../../../../constants";

interface Props {
    data: Currency[];
    name: string;
    formData: CurrencyForm;
    onChangeFormData: Dispatch<React.SetStateAction<CurrencyForm>>;
}

const SelectCurrencyTye = ({ data, name, formData, onChangeFormData }: Props) => {
    const [isOpenOptions, setIsOpenOptions] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null);

    const typeValue = useMemo(() => {
        return formData[name as keyof CurrencyForm]
    }, [formData, name])

    const onSelectType = (type: string) => {
        onChangeFormData({ ...formData, [name]: type })
    }

    const handleClickRef = (event: MouseEvent) => {
        if (
            dropdownRef.current?.contains(event.target as Node) ||
            dropdownRef.current?.contains(event.currentTarget as Node)
        ) {
            setIsOpenOptions(true);

        } else {
            setIsOpenOptions(false)
        }
    };
    useEffect(() => {
        document.addEventListener('click', handleClickRef, true);
        return () => {
            document.removeEventListener('click', handleClickRef, true);
        };
    });



    return (
        <div className="currency-type-container">
            <label onClick={() => setIsOpenOptions(!isOpenOptions)} htmlFor={name} >Currency</label>
            <div className="relative" id={name} onClick={() => setIsOpenOptions(!isOpenOptions)}>
                <div className="select-currency-type-container">
                    <img src={currencyIconDomain.replace("$token", typeValue as string)} alt="" />
                    {typeValue}
                    <img width={16} height={16} src="src/assets/chevron-down.svg" alt="" />
                </div>
                {
                    isOpenOptions &&
                    (<div className="currency-type-option" ref={dropdownRef}>
                        {data && data.map(item => {
                            return <div className="currency-type-option__item" onClick={() => onSelectType(item.currency)} key={item.currency} > <img src={currencyIconDomain.replace("$token", item.currency)} alt="" /> {item.currency}</div>
                        })}
                    </div>
                    )
                }

            </div>
        </div >

    )
}

export default SelectCurrencyTye