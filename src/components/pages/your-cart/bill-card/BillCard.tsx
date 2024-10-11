import {useBasket} from "@/hooks/use-basket";
import {formatNumberWithCommas} from "@/utils/formatNumber";
import Link from "next/link";

interface Props {
    
}

export function BillCard({}: Props) {

    const {basketItems} = useBasket()

    let prices=basketItems.map((basketItem, index)=>{
        if (basketItem.product.data.attributes.sell_price){
            return  basketItem.product.data.attributes.sell_price * basketItem.quantity
        }else {
            return  basketItem.product.data.attributes.price * basketItem.quantity
        }
    })

    let total = 0
    for (let price of prices){
        total+= price
    }

    let subtotal = formatNumberWithCommas({number: total})

    return (
        <div className="flex flex-col gap-[70px]">
            <div className="bg-white flex flex-col gap-[30px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 max-h-[560px] overflow-y-auto">
                <div className="flex justify-between items-center w-full">
                    <div className="font-quickSand text-heading6 text-gray-400">Subtotal</div>
                    <div className="font-quickSand text-heading4 text-green-200">$ {subtotal}</div>
                </div>
                <div className="h-[1px] w-full bg-gray-200"></div>
                <div className="grid grid-cols-2 gap-7 w-full">
                    <div className="font-lato text-heading6 text-gray-500 flex justify-start items-center">Shipping</div>
                    <div className="font-lato text-heading5 flex justify-end items-center">Free Shipping</div>
                </div>
                <div className="grid grid-cols-2 gap-7 w-full">
                    <div className="font-lato text-heading6 text-gray-500 flex justify-start items-center">Estimate for</div>
                    <div className="font-lato text-heading5 flex justify-end items-center">United Kingdom</div>
                </div>
                <div className="h-[1px] w-full bg-gray-200"></div>
                <div className="flex justify-between items-center w-full">
                    <div className="font-quickSand text-heading6 text-gray-400">Total</div>
                    <div className="font-quickSand text-heading4 text-green-200">$12.31</div>
                </div>
                <button type="submit" className="mt-6 px-[50px] py-2 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                    <Link href={'/checkout'} className="font-quickSand text-heading6 text-white">Proceed to Checkout</Link>
                    <img src="/assets/images/yourCart/fi-rs-sign-out%201.svg" alt="arrow right" width="16" height="16"/>
                </button>
            </div>
        </div>
    );
}