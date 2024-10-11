interface Props {
 data:{
     title: string,
     description: string
 }
}

export function AboutCard({data}: Props) {
    return (
        <div className={'md:basis-[30%]'}>
            <div className={'text-blue-300 font-bold text-xl lg:text-2xl xl:text-3xl pb-4'}>{data.title}</div>
            <p className={'text-gray-500 text-sm xl:text-base'}>{data.description}</p>
        </div>
    );
}