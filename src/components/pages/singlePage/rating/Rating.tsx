import {IconBox} from "@/components";

interface Props {
    rate: number
}

export function Rating({rate}: Props) {


    const star = []
    const halfStar = []
    const notStar = []

    for (let i = 0; i < Number.parseInt(rate.toString()); i++) {
        star.push(
            <li className="flex">
                <IconBox icon={"icon-star-full text-yellow-300"} size={12}/>
            </li>
        )
    }

    if (rate - Number.parseInt(rate.toString())) {
        let halfRate = Number((rate - Number.parseInt(rate.toString())) * 100)
        halfStar.push(
            <li className="flex" style={{background: `linear-gradient(270deg, rgb(209 213 219) 0%,rgb(209 213 219) ${100-halfRate}%,rgb(253 224 71) ${100-halfRate}%, rgb(253 224 71))`, backgroundClip: 'text', color: 'transparent'}}>
                <IconBox icon={"icon-star-full w-full h-full"} size={12}/>
            </li>
        )
        for (let i = rate + 1; i < 5; i++) {
            notStar.push(
                <li className="flex">
                    <IconBox icon={"icon-star-full text-gray-300"} size={12}/>
                </li>
            )
        }

    } else {
        for (let i = rate; i < 5; i++) {
            notStar.push(
                <li className="flex">
                    <IconBox icon={"icon-star-full text-gray-300"} size={12}/>
                </li>
            )
        }
    }

    return (
        <>
            <ul className="flex gap-1">
                {star} {halfStar} {notStar}
            </ul>
            <div className="text-xsmall text-gray-500 font-lato">({rate})</div>
        </>
    );
}