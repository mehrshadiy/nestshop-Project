import {ImageView} from "@/components";

interface Props {
    data:{
        src: string,
        alt: string,
        width: number,
        height: number,
        title: string,
        description: string
    }
}

export function ServicesCard({data}: Props) {
    return (
        <div className={'border border-gray-200 rounded-[15px] flex flex-col gap-4 xl:gap-5 items-center p-9 w-[290px] xl:w-[390px] hover:shadow-c-xl'}>
            <ImageView src={data.src} alt={'sale'} width={data.width} height={data.height} classname={'h-16 w-16 xl:h-[80px] xl:w-[80px]'}/>
            <div className={'text-blue-300 font-bold text-lg xl:text-xl'}>{data.title}</div>
            <p className={'text-gray-500 text-xs text-center xl:text-base'}>{data.description}</p>
            <span className={'text-sm text-green-200 cursor-pointer xl:text-base'}>Read more</span>
        </div>
    );
}