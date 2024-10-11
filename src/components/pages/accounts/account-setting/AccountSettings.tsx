interface Props {
    data :{
        icon: string,
        alt: string,
        width: number,
        height: number,
        title: string
    }[]
}

export function AccountSettings({data}: Props) {
    return (
        <div className="flex flex-col gap-2.5 font-quickSand text-gray-500 text-heading6 lg:mr-[73px] sm:mr-0 sm:mb-10">
            {data &&
                data.map((item, index) => {
                    return (
                        <div className="flex cursor-pointer gap-3.5 text-black px-4 py-3 rounded-[10px] items-center border border-gray-100 hover:bg-green-200 hover:text-white">
                            <img src={item.icon} alt={item.alt} width={item.width} height={item.height}/>
                            <div className="text-medium">{item.title}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}