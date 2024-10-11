import React from "react";
import {ImageView} from "@/components";
import {BasketItemType} from "@/types/api/Basket";
import {useQuery} from "@tanstack/react-query";
import {getOneProductsApiCall} from "@/api/Product";
import {formatNumberWithCommas} from "@/utils/formatNumber";

interface Props {
    data: BasketItemType
}

export function OrderCard({data}: Props) {

    const {data: thumbnailData } = useQuery({queryKey: ['thumbnailData', data.product.data.id], queryFn: ()=> getOneProductsApiCall({id: data.product.data.id, populate: ['thumbnail']})})

    let totalPrice
    if (data.product.data.attributes.sell_price){
       totalPrice =  formatNumberWithCommas({number: data.product.data.attributes.sell_price * data.quantity })
    }else {
        totalPrice = formatNumberWithCommas({number: data.product.data.attributes.price * data.quantity })
    }


    return (
        <div className="grid grid-cols-[minmax(0,_2fr)_minmax(0,_4fr)_minmax(0,_1fr)_minmax(0,_1fr)] gap-7 w-full">
            <div className="flex justify-center items-center">
                {
                    thumbnailData &&
                    <ImageView src={thumbnailData.data.attributes.thumbnail?.data?.attributes.url}
                               alt={thumbnailData.data.attributes.thumbnail?.data?.attributes.name}
                               width={thumbnailData.data.attributes.thumbnail?.data?.attributes.width}
                               height={thumbnailData.data.attributes.thumbnail?.data?.attributes.height}/>
                }
            </div>
            <div className="font-quickSand text-heading-sm flex justify-center items-center py-[22px]">
                {data.product.data.attributes.title}
            </div>
            <div className="font-lato text-heading4 text-gray-400 flex justify-center items-center">× {data.quantity}</div>
            <div className="font-lato text-heading4 text-green-200 flex justify-center items-center">${totalPrice}</div>
        </div>
    );
}