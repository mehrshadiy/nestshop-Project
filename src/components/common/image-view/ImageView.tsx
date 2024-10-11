import React from 'react';
import Image from 'next/image'


interface Props {
    src?: string | null ;
    alt:string | undefined;
    width?: number | undefined;
    height?: number | undefined;
    classname?: string
}
export function ImageView({src='',alt,width,height,classname=''}: Props) {

    const imageSrc = src ? (src.startsWith('/uploads') ? 'https://nest.navaxcollege.com' + src : src) : ''

    return(
        <Image src={imageSrc} alt={alt ? alt : ''} width={width} height={height} className={classname}/>
    )

}


