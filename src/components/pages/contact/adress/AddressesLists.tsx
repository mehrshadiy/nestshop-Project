import Link from "next/link";

interface Props {
    data: Array<{
        title: string;
        address: string;
        phoneNumber: string;
        email: string;
        link: string;
    }>;
}

export function AddressesLists({data}: Props) {
    return (
        <ul className={'container max-w-screen-xl text-lg mb-10 grid grid-cols-3 gap-x-3 gap-y-6  justify-between'}>
            {data.map((item, index)=>{
                return (
                    <li key={index}>
                        <h3 className={'text-[#253D4E] text-2xl mb-3'}>
                            {item.title}
                        </h3>
                        <p className={'font-lato text-sm text-[#7E7E7E]'}>
                            {item.address}
                        </p>
                        <Link href={`tel:${item.phoneNumber}`} className={'font-lato text-sm text-gray-500 block'}>
                            Phone: <span className={'text-green-200'}>{item.phoneNumber}</span>
                        </Link>
                        <Link href={`mailto:${item.email}`} className={'font-lato text-sm text-[#7E7E7E] mb-4 block'}>
                            Email: <span className={'text-green-200'}>{item.email}</span>
                        </Link>
                        <Link href={item.link} className={'text-sm py-2 px-4 bg-[#3BB77E] rounded text-white'}
                              children={'View map'}/>
                    </li>
                )
            })}
        </ul>
    )
}