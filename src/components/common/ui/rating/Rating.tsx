import {IconBox} from "@/components";

interface Props {
rate: number
}

export function Rating({rate}: Props) {

    const star =[]
    const notStar =[]
    for(let i= 0 ; i < Math.floor(rate); i++){
        star.push(<li className="flex"><IconBox icon={"icon-star-full"} size={12}/></li>
        )
    }

    for(let i= rate; i < 5; i++){
        notStar.push(<li className="flex"><IconBox icon={"icon-star-empty"} size={12}/></li>
        )
    }

    return (
        <div className={'flex align-baseline items-center mb-4'}>
                {star} {notStar}
            <div className="text-xs ml-2 ">({rate})</div>
        </div>
    );
}