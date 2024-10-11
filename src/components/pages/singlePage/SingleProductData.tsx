import {ApiSingleResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {IconBox, Rating} from "@/components";
import React, {useContext} from "react";
import BasketContext from "@/store/BasketContext";

interface Props {
    data: ApiSingleResponseType<ProductType>

}

export function SingleProductData({data}: Props) {

    const basket = useContext(BasketContext)
    const currentProductInBasket = basket.getItem(data.data.id)


    return (
        <div className="w-1/2">
            {
                data.data.attributes.quantity > 0 ?
                    <span className={'text-green-200 text-sm mb-2 bg-green-100 p-2 rounded font-bold inline-block'}>
                            In Stock
                        </span>
                    :
                    <span className={'text-rose-700 text-sm mb-2 bg-rose-100 p-2 rounded font-bold inline-block'}>
                            out of Stock
                        </span>
            }

            <h2 className={'text-blue-300 text-4xl mb-5 font-bold'}>
                {data.data.attributes.title}
            </h2>


            <Rating rate={data.data.attributes.rate}/>

            {
                data.data.attributes.sell_price ?
                    <div className={'flex items-baseline gap-4 mb-5'}>
                        <span className={'text-green-200 text-7xl font-bold'}>
                            ${data.data.attributes.sell_price}
                        </span>
                        <span className={'text-gray-400 text-3xl line-through font-bold'}>
                            ${data.data.attributes.price}
                        </span>
                    </div>
                    :
                    <div className={'flex items-baseline gap-4 mb-5'}>
                        <span className={'text-green-200 text-7xl font-bold'}>
                            ${data.data.attributes.price}
                        </span>
                    </div>
            }

            {
                data.data.attributes.description &&
                <p className={'mb-4 font-lato text-medium text-gray-500'}>
                    {data.data.attributes.description}
                </p>
            }

            <div className={'grid grid-cols-5 w-1/2 gap-4 mb-10'}>

                {currentProductInBasket ?
                    <span className={'border rounded py-2 px-4 max col-span-2 flex justify-between'}>
                        {
                            currentProductInBasket.quantity
                        }
                        <div className="flex flex-col justify-between">
                            <IconBox icon={"up icon-angle-small-up"} size={10}
                                     onClick={() => basket.increaseItem(data.data.id)}/>
                            <IconBox icon={"down icon-angle-small-down"} size={10}
                                     onClick={() => basket.decreaseItem(data.data.id)}/>
                        </div>
                    </span>
                    :
                    <div className={'flex gap-2 py-2 px-4 bg-green-200 w-fit rounded col-span-3'}>
                        <IconBox icon={'icon-shopping-cart text-white font-bold '} size={14}/>
                        <button onClick={() => basket.addItem(data.data)}
                                className={'text-white text-sm font-bold inline-block text-center'}>
                            Add to card
                        </button>
                    </div>
                }
            </div>

            <p>
                SKU: {data.data.attributes.SKU}
            </p>

        </div>
    )
}