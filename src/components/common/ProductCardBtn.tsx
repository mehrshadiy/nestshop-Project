import {IconBox} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import React from "react";
import {useBasket} from "@/hooks/use-basket";

interface Props {
    productData: EntityType<ProductType>
}

export function ProductCardBtn({productData}: Props) {

    const {addItem, getItem, updateItem} = useBasket()

    const basketItem = getItem(productData.id)

    // const basket = useContext(BasketContext)
    // const currentProductInBasket = basket.getItem(productData.id)

    return (
        <div className="add-product">
            {
                basketItem ?
                    <div className="input-product__container  border-[1px] rounded-[4px] border-green-300 text-green-300 h-[30px] p-[3px] w-[60px] flex justify-between px-2">
                        <div className="flex flex-col justify-between">
                            <IconBox icon={"up icon-angle-small-up"} size={10} onClick={()=> updateItem(productData.id,'increase')}/>
                            <IconBox icon={"down icon-angle-small-down"} size={10} onClick={()=> updateItem(productData.id, 'decrease')}/>
                        </div>
                        {
                            basketItem.quantity
                        }
                    </div> :
                    <button onClick={() => addItem(productData.id)}
                            className="text-heading-sm text-green-200 border-[1px] rounded-lg bg-green-150 p-2 text-nowrap">Adds
                        +
                    </button>
            }
        </div>
    );
}

export default React.memo(ProductCardBtn)   //why it doesn't work?