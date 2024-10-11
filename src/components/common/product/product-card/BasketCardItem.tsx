import {IconBox, ImageView} from "@/components";
import React from "react";
import {formatNumberWithCommas} from "@/utils/formatNumber";
import {BasketItemType} from "@/types/api/Basket";
import {useBasket} from "@/hooks/use-basket";
import {useQuery} from "@tanstack/react-query";
import {getOneProductsApiCall} from "@/api/Product";

interface Props {
    basketItem: BasketItemType
    isLast: boolean
}

export function BasketCardItem({basketItem, isLast}: Props) {

    const {updateItem} = useBasket()
    const {data: thumbnailData } = useQuery({queryKey: ['thumbnailData', basketItem.product.data.id], queryFn: ()=> getOneProductsApiCall({id: basketItem.product.data.id, populate: ['thumbnail']})})

    const price = formatNumberWithCommas({number: basketItem.product.data.attributes.price * basketItem.quantity})
    const sell_price = formatNumberWithCommas({number: (basketItem.product.data.attributes.sell_price ?? 0) * basketItem.quantity})

    return (
        <li className={`flex gap-x-4 items-center py-2 ${isLast ? 'border-b-0' : 'border-b border-b-green-150'}`}>
            <ImageView src={thumbnailData?.data.attributes.thumbnail?.data?.attributes.url}
                       alt={thumbnailData?.data.attributes.thumbnail?.data?.attributes.name}
                       width={thumbnailData?.data.attributes.thumbnail?.data?.attributes.width}
                       height={thumbnailData?.data.attributes.thumbnail?.data?.attributes.height}
                       classname={'w-[50px] h-[50px]'}/>
            <p className={'w-full text-sm'}>{basketItem.product.data.attributes.title}</p>
            {
                basketItem.product.data.attributes.sell_price
                    ? <span className={'text-center'}>${sell_price}</span>
                    : <span className={'text-center'}>${price}</span>
            }
            <div
                className="input-product__container  border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px] w-[60px] flex justify-between">
                <div className="flex flex-col justify-between">
                    <IconBox icon={"up icon-angle-small-up"} size={10}
                             onClick={() => updateItem(basketItem.product.data.id, 'increase')}/>
                    <IconBox icon={"down icon-angle-small-down"} size={10}
                             onClick={() => updateItem(basketItem.product.data.id, 'decrease')}/>
                </div>
                {basketItem.quantity}
            </div>
        </li>
    );
}