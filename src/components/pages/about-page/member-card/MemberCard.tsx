import {ImageView, SocialMediaIcon} from "@/components";

interface Props {
    data:{
        src: string,
        alt: string,
        width: number,
        height: number,
        name: string,
        title: string
    }
}

export function MemberCard({data}: Props) {
    return (
        <div className={'basis-full md:basis-1/2 lg:basis-1/3'}>
            <div className={'flex flex-col items-center'}>
                <ImageView src={data.src} alt={data.alt} width={data.width} height={data.height}
                           classname={'w-5/6 object-cover object-center max-w-[350px]'}/>
                <div className={'bg-white w-3/5 max-w-[220px] xl:max-w-[250px] -translate-y-2/4 py-4 xl:py-5 shadow-c-xl rounded-[15px] flex flex-col items-center'}>
                    <div className={'text-blue-300 font-bold pb-2 xl:text-2xl'}>{data.name}</div>
                    <div className={'text-gray-500 font-medium text-sm pb-4 xl:text-base'}>{data.title}</div>
                    <SocialMediaIcon/>
                </div>
            </div>
        </div>
    );
}