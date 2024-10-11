import {IconBox, ImageView} from "@/components";
import {useState} from "react";
import {categoriesList} from "@/mock/categories";
import {brandsList} from "@/mock/brands";

interface Props {
    
}

export function Filter({}: Props) {

    const [price, setPrice] = useState(16);

    const handleInputChange = (e: any) => {
        setPrice(e.target.value);
    };

    return (
        <div className="flex flex-col border-[1px] border-gray-200 rounded-[10px] px-[30px] pt-7 mb-[55px] pb-4">
            <p className="text-heading4 font-quickSand mb-[14px] pb-[14px] border-b-2">Filter items</p>
            <div className={'mb-[31px]'}>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex">
                        <p className="font-lato text-heading6 font-normal text-gray-400 mr-[22px]">Price
                            Range:</p>
                        <span className="font-quickSand text-heading5 text-green-200">$16 - $173</span>
                    </div>
                </div>
                <input
                    type="range"
                    className="w-full h-[4px] rounded-[2px]"
                    min="16"
                    max="173"
                    value={price}
                    onChange={handleInputChange}
                />
                <span className="font-quickSand text-heading5 text-green-200 text-base">${price}</span>
            </div>

            <p className="font-lato text-heading6 font-normal text-gray-400 mb-[21px]">Used for:</p>
            <ul className="flex flex-col items-start mb-[30px]">
                {
                    categoriesList &&
                    categoriesList.map((categoriesListItem, index)=>{
                        return (
                            <li key={index} className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">{categoriesListItem}</p>
                            </li>
                        )
                    })
                }
            </ul>

            <p className="font-lato text-heading6 font-normal text-gray-400 mb-[21px]">Brand:</p>
            <ul className="flex flex-col items-start mb-[30px]">
                {
                    brandsList &&
                    brandsList.map((brandsItem, index)=>{
                        return (
                            <li key={index} className="flex mb-[10px] items-center justify-center cursor-pointer">
                                <IconBox icon={'icon-play mr-[10px]'} size={16}/>
                                <p className="text-medium text-gray-400 hover:text-blue-300">{brandsItem}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="flex justify-between items-center">
                <button className="rounded bg-green-100 px-[32px] py-[14px] text-green-200 flex justify-center items-center">Filter</button>
                <ImageView src={"/assets/images/fresh-chinese-cabbage.png"} alt={'fresh-chinese-cabbage'} classname={"hidden md:block"} width={204} height={173}/>
            </div>
        </div>
    );
}