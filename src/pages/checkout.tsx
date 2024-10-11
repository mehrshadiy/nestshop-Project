import React from "react";
import {CheckoutForm, ImageView, OrderCounter} from "@/components";
import {Section} from "@/components/layouts";
import OrdersList from "@/components/pages/checkout/orders-list/OrdersList";
import {FormProvider, useForm} from "react-hook-form";

export interface CheckoutFormType {
    fist_name: string
    last_name: string
    address: string
    address_line2: string
    country: string
    City_Town: string
    Postcode_Zip: string
    phone_number: string
    email: string
    company: string
    information: string
    create_account: boolean
    diff_address: boolean
    payment_method: boolean
}

export default function Checkout() {

    const {register, handleSubmit, formState: {errors}} = useForm<CheckoutFormType>()

    const checkoutSubmitHandler = (checkoutFormData: CheckoutFormType) => {
        console.log('checkoutFormData', checkoutFormData)
    }

    return (
        <Section>
                <form className="font-lato" onSubmit={handleSubmit(checkoutSubmitHandler)}>
                    <OrderCounter title={'Checkout'}/>
                    <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[2fr_1fr] gap-6 mt-12">
                        <CheckoutForm register={register} errors={errors}/>
                        <div className="flex flex-col gap-[70px]">
                            <OrdersList/>
                            <div>
                                <div className="font-quickSand text-heading4">Payment</div>
                                <div className="flex flex-col items-start gap-4 mt-7">
                                    <div className="flex items-center justify-start gap-2">
                                        <input {...register("payment_method")} type="radio" id="direct-transfer"
                                               value="direct-transfer" className="accent-green-200 w-4 h-4" checked/>
                                        <label className="font-lato text-medium text-gray-500"
                                               htmlFor="direct-transfer">Direct bank transfer</label>
                                    </div>
                                    <div className="flex items-center justify-start gap-2">
                                        <input {...register("payment_method")} type="radio" id="on-delivery"
                                               value="direct-transfer" className="accent-green-200 w-4 h-4"/>
                                        <label className="font-lato text-medium text-gray-500" htmlFor="on-delivery">Cash
                                            on delivery</label>
                                    </div>
                                    <ImageView src={"/assets/images/payment-method%202.png"} alt={"payment method"}
                                               width={307} height={21}/>
                                </div>
                            </div>
                            <button type="submit"
                                    className="mt-6 px-[50px] py-2 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                                <div className="font-quickSand text-heading6 text-white">Place an Order</div>
                                <ImageView src={"/assets/images/checkout/fi-rs-sign-out%201.svg"} alt={"arrow right"}
                                           height={16} width={16}/>
                            </button>
                        </div>
                    </div>
                </form>
        </Section>
    );
}