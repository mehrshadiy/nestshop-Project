import {BasketItemType} from "@/types/api/Basket";
import {useQuery} from "@tanstack/react-query";
import {getOneProductsApiCall} from "@/api/Product";
import {ImageView} from "@/components";
import {formatNumberWithCommas} from "@/utils/formatNumber";
import {useBasket} from "@/hooks/use-basket";
import {type} from "node:os";

interface Props {
    data: BasketItemType
}

export function CartTableRow({data}: Props) {

    const {updateItem} = useBasket()

    const {data: thumbnailData } = useQuery({queryKey: ['thumbnailData', data.product.data.id], queryFn: ()=> getOneProductsApiCall({id: data.product.data.id, populate: ['thumbnail']})})

    let sell_price = formatNumberWithCommas({number: data.product.data.attributes.sell_price})
    let price = formatNumberWithCommas({number: data.product.data.attributes.price})

    let totalPrice
    if (data.product.data.attributes.sell_price){
        totalPrice = formatNumberWithCommas({number: data.product.data.attributes.sell_price * data.quantity})
    }else {
        totalPrice = formatNumberWithCommas({number: data.product.data.attributes.price * data.quantity})
    }

    return (
            <div className="font-quickSand text-xsmall md:text-heading6 w-full grid grid-cols-[minmax(0,_0.5fr)_minmax(0,_2fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)]">
                <div className="flex justify-center items-center">
                    <label htmlFor="chbox1" className="hidden"></label>
                    <input type="checkbox" name="chbox1" id="chbox1" className="accent-green-200 w-3 h-3 md:w-4 md:h-4"/>
                </div>
                <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
                    {data && <ImageView src={thumbnailData?.data.attributes.thumbnail?.data?.attributes.url}
                                        alt={thumbnailData?.data.attributes.thumbnail?.data?.attributes.name}
                                        width={thumbnailData?.data.attributes.thumbnail?.data?.attributes.width}
                                        height={thumbnailData?.data.attributes.thumbnail?.data?.attributes.height}
                                        classname={"max-h-[64px] max-w-[64px] xl:max-h-[114px] xl:max-w-[114px]"}/>}
                    <div className="font-quickSand">{data.product.data.attributes.title}</div>
                </div>
                <div className="flex justify-center items-center">
                    {
                        data.product.data.attributes.sell_price
                            ? <div className="font-quickSand text-xsmall md:text-heading4 text-gray-400">${sell_price}</div>
                            : <div className="font-quickSand text-xsmall md:text-heading4 text-gray-400">${price}</div>
                    }
                </div>
                <div className="flex justify-center items-center">
                    <div className={"w-full accent-green-200 flex justify-center items-center text-center text-green-200 font-quickSand text-xsmall md:text-heading5 focus:outline-none"}>{data.quantity}</div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="font-quickSand text-xsmall md:text-heading4 text-green-200">$ {totalPrice}</div>
                </div>
                <div className="flex justify-center items-center cursor-pointer" onClick={()=> updateItem(data.product.data.id, 'delete')}>
                    <ImageView src={"/assets/images/yourCart/fi-rs-cross-circle%201.svg"} alt={"clean sign"} width={25} height={25}/>
                </div>
            </div>
    );
}