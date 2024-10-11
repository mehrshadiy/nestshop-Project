import {ServicesCard} from "@/components/pages/about-page";

interface Props {
    data:{
        src: string,
        alt: string,
        width: number,
        height: number,
        title: string,
        description: string
    }[]
}

export function ServicesList({data}: Props) {
    return (
        <div className={'flex flex-wrap items-center justify-center gap-5'}>
            {
                data.map((item, index)=>{
                    return(
                        <ServicesCard key={index} data={item}/>
                    )
                })
            }
        </div>
    );
}