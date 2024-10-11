import {Badge, SimpleProductCardData} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {formatNumberWithCommas} from "@/utils/formatNumber";
import {ProductCardBtn} from "@/components/common/ProductCardBtn";
import {twMerge} from "tailwind-merge";

interface Props {
    data: EntityType<ProductType>
    customCardClass?: string
}

export function SimpleProductCard({data, customCardClass}: Props) {
    const sellPrice = formatNumberWithCommas({number: data.attributes.sell_price})
    const price = formatNumberWithCommas({number: data.attributes.price})

    return (
        <div className={twMerge("group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-4 sm:p-4 xl:pb-5 lg:pt-[65px] h-max w-full", customCardClass)}>
            {data.attributes.label && <Badge badge={data.attributes.label} sale_price={data.attributes.sell_price} price={data.attributes.price}/>}

            <SimpleProductCardData data={data}/>

            <div className="flex items-center justify-between mt-3">
                <div>
                    {
                        data.attributes.sell_price ?
                            <>
                                <span className="text-heading5 text-green-200 mr-1">${sellPrice}</span>
                                <span className="text-heading-sm line-through text-gray-500">${price}</span>
                            </>
                            :
                            <span className="text-heading5 text-green-200">${price}</span>
                    }
                </div>
                <ProductCardBtn productData={data}/>
            </div>

        </div>
    );
}