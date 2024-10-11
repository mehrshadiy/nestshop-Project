import React from "react";
import {useBasket} from "@/hooks/use-basket";

interface Props {
    title: string
}

export function OrderCounter({title}: Props) {

    const {basketItems} = useBasket()

    return (
        <>
            <h1 className="text-heading2 font-quickSand">{title}</h1>
            <div className="text-heading6 text-gray-500 mt-4">There are
                <span className="text-green-200"> {basketItems.length} </span> products in your cart
            </div>
        </>
    );
}