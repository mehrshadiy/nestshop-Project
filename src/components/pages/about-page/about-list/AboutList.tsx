import {AboutCard} from "@/components/pages/about-page";

interface Props {
    data:{
        title: string,
        description: string
    }[]
}

export function AboutList({data}: Props) {
    return (
        <div className={'flex flex-wrap gap-6 justify-between w-full'}>
            {
                data.map((item, index)=>{
                    return(
                        <AboutCard key={index} data={item}/>
                    )
                })
            }
        </div>
    );
}