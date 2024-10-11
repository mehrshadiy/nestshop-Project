import React from "react";
import {OrderCard} from "@/components";
import {useBasket} from "@/hooks/use-basket";
import {BasketItemType} from "@/types/api/Basket";

export default function OrdersList() {

    const {basketItems} =  useBasket()

    return (
        <div className="bg-white flex flex-col gap-[30px] items-center justify-between shadow-c rounded-[10px] border-[1px] border-gray-200 py-4 px-8 max-h-[560px] overflow-y-auto">
            <div className="flex justify-between items-center w-full">
                <div className="font-quickSand text-heading4">Your Orders</div>
                <div className="font-quickSand text-heading6 text-gray-400">Subtotal</div>
            </div>
            <div className="h-[1px] w-full bg-gray-200"></div>
            {
                basketItems &&
                basketItems.map((basketItem: BasketItemType, index: number)=>{
                    return(
                        <OrderCard data={basketItem}/>
                    )
                })
            }
        </div>

    );
}