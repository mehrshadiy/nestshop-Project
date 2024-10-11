import {MemberCard} from "@/components/pages/about-page";

interface Props {
    data:{
        src: string,
        alt: string,
        width: number,
        height: number,
        name: string,
        title: string
    }[]
}

export function MemberList({data}: Props) {
    return (
        <>
            {
               data.map((item, index)=>{
                   return(
                       <MemberCard data={item}/>
                   )
               })
            }
        </>
    );
}