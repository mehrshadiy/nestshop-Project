import {ImageView, Input, OptionType, ReactSelectCountry} from "@/components";
import Link from "next/link";
import React from "react";
import {Control, Controller, FieldErrors, useForm, UseFormRegister} from "react-hook-form";
import {CheckoutFormType} from "@/pages/checkout";


interface Props {
    register: UseFormRegister<CheckoutFormType>
    errors: FieldErrors<CheckoutFormType>
}

export function CheckoutForm({register, errors}: Props) {

    const options: OptionType[] = [
        { value: 'iran', label: 'Iran' },
        { value: 'us', label: 'United States' }
    ];

    return (
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
            <div className="lg:col-span-2 2xl:col-span-1 text-medium text-gray-500 bg-white flex gap-[7px] py-[13px] items-center justify-center shadow-c rounded-[10px] border-[1px] border-gray-200">
                <ImageView src={"/assets/images/checkout/fi-rs-user.svg"} alt={"unanimous user"} width={16}
                           height={16}/>
                <div>Already have an account?</div>
                <Link className={"text-green-200"} href={'/auth/login'}>Click here to login</Link>
            </div>
            <div className="lg:col-span-2 2xl:col-span-1 focus-within:border-green-200 bg-white text-medium text-gray-500 flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 min-h-[52px]">
                <div className="flex gap-[7px] ml-[22px] flex-1">
                    <ImageView src={"/assets/images/checkout/fi-rs-label%201.svg"} alt={"unanimous user"}
                               width={16} height={16}/>
                    <label htmlFor="coupon-code" className="hidden"></label>
                    <input name="coupon-code" id="coupon-code" type="text" placeholder="Coupon Code"
                           className="w-full placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                </div>
                <button className="font-quickSand text-heading6 bg-blue-300 h-full min-h-[52px] rounded-r-[10px] text-white px-7">Apply
                    Coupon
                </button>
            </div>
            <div className="font-quickSand text-heading4 col-span-2">Billing Details</div>
            <Input register={register("fist_name", {
                required: "enter your first name please",})}
                   type={"text"} errors={errors} {...{placeholder: "First name*"}} marginBottom={'mb-0'}
                   parentClassname={"focus-within:border-green-200 shadow-c rounded-[10px]"}
                   className={'mb-0 py-4 rounded-[10px]'}/>

            <Input register={register("last_name", {
                required: "enter your last name please",})}
                   type={"text"} errors={errors} {...{placeholder: "Last name*"}} marginBottom={'mb-0'}
                   parentClassname={"focus-within:border-green-200 shadow-c rounded-[10px]"}
                   className={'mb-0 py-4 rounded-[10px]'}/>

            <Input register={register("address", {
                required: "enter your address please",})}
                   type={"text"} errors={errors} {...{placeholder: "Address*"}} marginBottom={'mb-0'}
                   parentClassname={"focus-within:border-green-200 shadow-c rounded-[10px]"}
                   className={'mb-0 py-4 rounded-[10px]'}/>

            <Input register={register("address_line2", {
                required: true})}
                   type={"text"} errors={errors} {...{placeholder: "Address line 2*"}} marginBottom={'mb-0'}
                   parentClassname={"focus-within:border-green-200 shadow-c rounded-[10px]"}
                   className={'mb-0 py-4 rounded-[10px]'}/>

            <ReactSelectCountry errors={errors} register={register}/>

            <Input register={register("City_Town", {
                required: true
            })}
                   type={"text"} errors={errors} {...{placeholder: "City / Town"}} marginBottom={'mb-0'}
                   parentClassname={"focus-within:border-green-200 shadow-c rounded-[10px]"}
                   className={'mb-0 py-4 rounded-[10px]'}/>

            <Input register={register("Postcode_Zip", {
                required: true
            })}
                   type={"text"} errors={errors} {...{placeholder: "Postcode / Zip"}} marginBottom={'mb-0'}
                   parentClassname={"focus-within:border-green-200 shadow-c rounded-[10px]"}
                   className={'mb-0 py-4 rounded-[10px]'}/>

            <Input register={register("phone_number", {
                required: true, minLength: {value: 8, message: 'Phone number must be at 8 number'}
            })}
                   type={"tel"} errors={errors} {...{placeholder: "Phone number"}} marginBottom={'mb-0'}
                   parentClassname={"focus-within:border-green-200 shadow-c rounded-[10px]"}
                   className={'mb-0 py-4 rounded-[10px]'}/>

            <Input register={register("email", {
                required: true
            })}
                   type={"email"} errors={errors} {...{placeholder: "Email"}} marginBottom={'mb-0'}
                   parentClassname={"focus-within:border-green-200 shadow-c rounded-[10px]"}
                   className={'mb-0 py-4 rounded-[10px]'}/>

            <Input register={register("company")}
                   type={"text"} errors={errors} {...{placeholder: "Company"}} marginBottom={'mb-0'}
                   parentClassname={"focus-within:border-green-200 shadow-c rounded-[10px]"}
                   className={'mb-0 py-4 rounded-[10px]'}/>

            <div
                className="col-span-2 focus-within:border-green-200 bg-white flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 min-h-[210px]">
                <label htmlFor="information" className="hidden"></label>
                <textarea {...register("information")} id="information" placeholder="Additional information"
                          className="resize-none w-full h-full bg-transparent placeholder-gray-400 focus:outline-none text-gray-500 text-medium"></textarea>
            </div>
            <div className="col-span-2 bg-white flex gap-[7px] items-center justify-start text-gray-500">
                <input {...register("create_account")} id="create-account" type="checkbox"
                       className="accent-green-200 h-6"/>
                <label htmlFor="create-account">Create an account?</label>
            </div>
            <div className="col-span-2 bg-white flex gap-[7px] items-center justify-start text-gray-500">
                <input {...register("diff_address")} id="diff-address" type="checkbox"
                       className="accent-green-200 h-6"/>
                <label htmlFor="diff-address">Ship to a different address?</label>
            </div>
        </div>
    );
}


