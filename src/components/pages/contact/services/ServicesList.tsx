import Link from "next/link";

interface Props {
    data: Array<{
        title: string;
        link: string;
        description: string;
    }>;
}

export function ServicesList({data}: Props) {
    return (
        <ul className={'col-span-2 grid grid-cols-2 gap-y-10 gap-x-5 list-inside list-decimal'}>

            {
                data.map((item, index) => {
                    return (
                        <li key={index} className={''}>
                            <Link href={item.link} className={'text-[#253D4E] hover:text-[#3BB77E] hover:cursor-pointer mb-2 inline-block'}>
                                {item.title}
                            </Link>
                            <p className={'text-[#7E7E7E] text-sm'}>
                                {item.description}
                            </p>
                        </li>
                    )
                })
            }
        </ul>
    )
}