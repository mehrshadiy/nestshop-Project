import React from 'react';
import Select, {SingleValue } from 'react-select';
import {Controller, FieldErrors, useForm, UseFormRegister} from 'react-hook-form';
import { CheckoutFormType } from '@/pages/checkout';
import {ErrorMessage} from "@/components/common/ui/form/ErrorMessage";

interface Props {
    register: UseFormRegister<CheckoutFormType>
    errors: FieldErrors<CheckoutFormType>
}

export interface OptionType {
    value: string,
    label: string
}

export function ReactSelectCountry({register, errors}: Props) {

    const {control} = useForm<CheckoutFormType>()

    const options: OptionType[] = [
        { value: 'iran', label: 'Iran' },
        { value: 'us', label: 'United States' }
    ];

    const name = register.name

    return (
        <div>
            <div>
                <label htmlFor="country" className="hidden"></label>
                <Controller
                    name={"country"}
                    rules={{required: true}}
                    control={control}
                    render={({field}) => (
                        <Select<OptionType, false>
                            {...field}
                            options={options}
                            getOptionLabel={(option) => option.label}
                            getOptionValue={(option) => option.value}
                            styles={{
                                control: () => ({
                                    border: '1px solid #E5E5E5',
                                    boxShadow: '14px 14px 36px 0px rgba(85, 85, 85, 0.1)',
                                    borderRadius: '10px',
                                    padding: '10px 32px',
                                    backgroundColor: 'white',
                                    display: 'flex',
                                    gap: '7px',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    '&:focus-within': {
                                        border: '2px solid #3BB77E'
                                    },
                                }),
                                placeholder: (baseStyles) => ({
                                    ...baseStyles,
                                    color: 'gray'
                                }),
                            }}
                            onChange={(selectedOption: SingleValue<OptionType> | null) => {
                                field.onChange(selectedOption?.value);
                            }}
                            value={options.find(option => option.value === field.value)}
                        />
                    )}/>
            </div>
            <ErrorMessage name={name} errors={errors}/>
        </div>
    );
}
