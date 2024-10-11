import {
    BillCard,
    CouponInput,
    IconBox,
    ImageView,
    OrderCounter,
    ShippingCard,
    YourCartTable
} from "@/components";
import {useForm} from "react-hook-form";
import Link from "next/link";
import {useBasket} from "@/hooks/use-basket";

export default function YourCart() {

    const {deleteItems, refreshBasket} = useBasket()

    const {register, handleSubmit,formState:{errors}} = useForm()

    return (
        <>
            <div className="container m-auto">
                <form className="font-lato">
                    <OrderCounter title={'Your Cart'}/>
                    <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1.5fr] xl:grid-cols-[2fr_1fr] gap-6 mt-12">
                        <div>
                            <div className="flex items-center justify-end pb-[20px]">
                                <div className="flex items-center font-quickSand text-heading6 text-gray-500 cursor-pointer" onClick={deleteItems}>
                                    <ImageView src={"/assets/images/yourCart/fi-rs-trash%201.svg"} alt={"trash bin"} width={16} height={17}/>
                                    <span className={'pl-1'}>Clear Cart</span>
                                </div>
                            </div>
                            <div className="w-full text-center">
                                <YourCartTable register={register}/>
                                <div className="flex flex-col gap-[30px] mt-[26px]">
                                    <div className="h-[1px] w-full bg-gray-200"></div>
                                    <div className="flex flex-col lg:flex-row justify-between items-center">
                                        <button type="submit" className="mt-6 px-[50px] py-2 bg-yellow-100 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                                            <IconBox icon={"icon-arrow-small-right rotate-180 text-white"} size={24}/>
                                            <Link href={'/'} className="font-quickSand text-heading6 text-white">Continue Shopping</Link>
                                        </button>
                                        <button type="submit" className="mt-6 px-[50px] py-2 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5" onClick={refreshBasket}>
                                            <ImageView src={"/assets/images/yourCart/fi-rs-refresh%201.svg"} alt={"refresh"} width={17} height={17}/>
                                            <div className="font-quickSand text-heading6 text-white">Update Cart</div>
                                        </button>
                                    </div>
                                    <div className="flex flex-col xl:grid xl:grid-cols-[minmax(0,_1.5fr)_minmax(0,_1fr)] gap-[45px] text-left">
                                        <div className="bg-white flex flex-col gap-[30px] md:gap-[14px] items-start justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 max-h-[560px] overflow-y-auto">
                                            <ShippingCard register={register}/>
                                            <CouponInput register={register}/>
                                        </div>
                                        <div className="flex flex-col gap-[30px] items-start justify-center">
                                            <div className="font-quickSand text-heading4">Apply Coupon</div>
                                            <div className="font-lato text-medium text-gray-400">Using A Promo Code?
                                            </div>
                                            <div
                                                className="lg:col-span-2 2xl:col-span-1 focus-within:border-green-200 bg-white text-medium text-gray-500 flex gap-[7px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 w-full">
                                                <div className="flex gap-[7px] ml-[22px] flex-1 w-full">
                                                    <img src="/assets/images/checkout/fi-rs-label%201.svg" width="16"
                                                         height="16" alt="unanimous user"/>
                                                    <label htmlFor="coupon-code" className="hidden"></label>
                                                    <input name="coupon-code" id="coupon-code" type="text"
                                                           placeholder="Coupon Code"
                                                           className="w-full placeholder-gray-400 focus:outline-none text-gray-500 text-medium"/>
                                                </div>
                                                <button
                                                    className="font-quickSand text-heading6 bg-green-200 h-full min-h-[52px] rounded-r-[10px] text-white px-7">Apply
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BillCard/>
                    </div>
                </form>
            </div>
        </>
    );
}