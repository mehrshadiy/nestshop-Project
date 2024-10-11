import {Badge, IconBox, SimpleProductCardData} from "@/components";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {formatNumberWithCommas} from "@/utils/formatNumber";
import {twMerge} from "tailwind-merge";
import {useBasket} from "@/hooks/use-basket";

interface Props {
    data: EntityType<ProductType>
    customCardClass?: string
}

export function SimpleProductCardWithSold({data, customCardClass}: Props) {
    const sellPrice = formatNumberWithCommas({number: data.attributes.sell_price})
    const price = formatNumberWithCommas({number: data.attributes.price})
    // const basket = useContext(basketContext)
    // const currentProductInBasket = basket.getItem(data.id)

    const {addItem, getItem, updateItem} = useBasket()

    const basketItem = getItem(data.id)

    return (
        <div className={twMerge("group border-[1px] border-gray-200 hover:border-green-150 rounded-[10px] hover:shadow-[20px_20px_40px_0_rgba(24,24,24,0.07)] relative p-2 sm:p-4 xl:pb-5 lg:pt-[65px] h-full w-fit overflow-hidden", customCardClass)}>
            { data.attributes.label && <Badge badge={data.attributes.label} sale_price={data.attributes.sell_price} price={data.attributes.price}/>}

            <SimpleProductCardData data={data}/>

            {
                data.attributes.total && data.attributes.sold &&
                    <>
                        <div className="flex items-center justify-between mt-3">
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

                        <div className="mt-[15px] bg-gray-200 h-[4px] w-full rounded-[2px]">
                            <div style={{width: `${(data.attributes.sold / data.attributes.total) * 100}%`}} className="bg-green-200 h-[4px] rounded-[2px]"></div>
                        </div>
                        <div className="mt-2.5 font-lato text-blue-300 text-xsmall">Sold: {data.attributes.sold}/{data.attributes.total}</div>
                        <div className="mt-[23px]">
                            {
                                basketItem ?
                                    <button className="flex justify-between px-5 items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-yellow-100 py-2 lg:py-[14px]">
                                        <div className="flex flex-col justify-between">
                                            <IconBox icon={"up icon-angle-small-up"} size={10}
                                                     onClick={() => updateItem(data.id, 'increase')}/>
                                            <IconBox icon={"down icon-angle-small-down"} size={10}
                                                     onClick={() => updateItem(data.id, 'decrease')}/>
                                        </div>
                                        {basketItem.quantity}
                                    </button>
                                    :
                                    <button onClick={() => addItem(data.id)} className="flex justify-center items-center gap-2 xl:text-heading-sm text-white border-[1px] w-full rounded-[4px] bg-green-200 hover:bg-yellow-100 px-2 py-2 lg:py-[14px]">
                                        <IconBox title={'Add To Card'} titleClassName={'text-heading-sm'}
                                                 icon={"icon-shopping-cart"} size={22}/>
                                    </button>
                            }
                        </div>
                    </>
            }
        </div>
    );
}