import {MiniProductCard} from "@/components";
import {PopulateType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
   data:  PopulateType<ProductType>
}

export function PopularProductList({data}: Props) {
    return (
        <div className="flex flex-col border-[1px] border-gray-200 rounded-[10px] px-[30px] pt-7 gap-6 pb-[36px] pr-[180px] mb-10">
            <p className="text-heading4 font-quickSand mb-[14px] pb-[14px] border-b-2 text-nowrap">Popular Items</p>
            <div className="flex flex-col gap-6">
                {
                    data &&
                    data.data.map((popularDataItem, index) => {
                        return (
                            <MiniProductCard data={popularDataItem} priceClass={'flex items-center gap-1'} imageClass={'w-[120px] h-[120px]'}/>
                        )
                    })
                }
            </div>
        </div>
    );
}