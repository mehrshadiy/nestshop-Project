import { ImageView, Rating} from "@/components";
import Link from "next/link";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    data: EntityType<ProductType>
}

export function SimpleProductCardData({data}: Props) {

    return (
        <>
            {/*
                <div
                className="mt-8 hidden group-hover:flex rounded-[5px] border-[1px] border-green-200 w-max absolute top-[100px] left-[50%] translate-x-[-50%] bg-white productAction cursor-pointer">
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                    <IconBox icon={"icon-heart text-brand1 text-green-200"} size={15}/>
                </div>
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                    <IconBox icon={"icon-shuffle"} size={15}/>
                </div>
                <div className="p-2.5 border-r-[1px] border-r-green-200 hover:bg-green-150">
                    <IconBox icon={"icon-eye"} size={15}/>
                </div>
            </div>
            */}
            <ImageView src={data.attributes.thumbnail?.data?.attributes.url} alt={'product'} width={210} height={168}
                       classname={"m-auto w-full aspect-[3/2] mb-[28px]"}/>
            <div className="flex flex-col gap-2">
                <div
                    className="text-gray-500 text-xsmall h-5">{data.attributes.categories?.data[0]?.attributes.title}</div>
                <Link href={'#'}><h3
                    className="text-heading-sm text-blue-300 h-[30px] mb-1 overflow-hidden overflow-ellipsis">{data.attributes.title}</h3>
                </Link>
                <div className="flex gap-4">
                    <Rating rate={data.attributes.rate}/>
                </div>
                <div
                    className="font-lato text-xsmall text-gray-500">{data.attributes.weight} {data.attributes.unit}</div>
            </div>
        </>
    );
}