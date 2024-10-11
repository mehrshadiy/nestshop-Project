import React, {MouseEvent} from "react";
import Link from "next/link";

interface Props {
    icon: string;
    size?: number;
    link?: string;
    title?: string;
    hideTitleOnMobile?: boolean;
    badge?: number;
    titleClassName?: string;
    path?: number;
    linkClassName?: string
    onClick?: (e: MouseEvent) => void
    onMouseEnter?: () => void
}

export function IconBox({icon, size = 22, link, title, hideTitleOnMobile = false, badge = 0, titleClassName = '', path = 0, linkClassName='',onClick, onMouseEnter} :Props) {

    let span = []
    for (let i = 1; i <= path; i++) {
        span.push(
            <span className={`path${i}`}></span>
        )
    }

    if(link){
        return (
            <Link href={link ?? '#'} className={`flex flex-row items-center ${linkClassName}`}>
                {
                    badge ?
                        <div className={'relative'}>
                            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i style={{fontSize: `${size}px`}} className={`${icon}`}>{span}</i>
                        </div>
                        :
                        <i style={{fontSize: `${size}px`}} className={`${icon}`}>{span}</i>
                }
                {title && <p className={`${hideTitleOnMobile ? 'hidden sm:inline-block' : 'inline-block'} ${titleClassName} ml-2`}>{title}</p>}
            </Link>
        );
    }else {
        return (
            <div className={'flex flex-row items-center'}>
                {
                    badge ?
                        <div onClick={onClick} onMouseEnter={onMouseEnter} className={'relative '}>
                            <span className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">{badge}</span>
                            <i style={{fontSize: `${size}px`}} className={`${icon}`}>{span}</i>
                        </div>
                        :
                        <i onClick={onClick} onMouseEnter={onMouseEnter} style={{fontSize: `${size}px`}} className={`${icon}`}>{span}</i>
                }
                {title && <p onClick={onClick} onMouseEnter={onMouseEnter} className={`${hideTitleOnMobile ? 'hidden sm:inline-block' : 'inline-block'} ${titleClassName} ml-2`}>{title}</p>}
            </div>
        );
    }
}


// @flow
// import * as React from 'react';
// import Link from "next/link";
//
// type Props = {
//     icon: string
//     size?: number
//     link?: string
//     title?: string
//     hideTitleOnMobile?: boolean
//     badge?: number
//     titleClassName?: string
//     path?: number
//     linkClassName?: string
// };
//
// export function IconBox({icon, size = 22, link, title, hideTitleOnMobile = false, badge = 0, titleClassName = "", path = 0, linkClassName}: Props) {
//
//     let span = []
//     for (let i = 1; i <= path; i++) {
//         span.push(
//             <span className={`path${i}`}></span>
//         )
//     }
//
//     if (link){
//         return (
//             <Link href={'#'} className={`flex items-center cursor-pointer ${linkClassName}`}>
//                 {
//                     badge ?
//                         <div className="relative">
//                     <span
//                         className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">
//                         {badge}
//                     </span>
//                             <i style={{fontSize: `${size}px`}} className={`${icon}`}>
//                                 {span}
//                             </i>
//                         </div>
//                         :
//                         <i style={{fontSize: `${size}px`}} className={`${icon}`}>
//                             {span}
//                         </i>
//                 }
//
//                 {
//                     title &&
//                     <div
//                         className={` ${hideTitleOnMobile ? 'hidden xl:inline-block' : 'inline-block'} ${titleClassName} ml-1`}>{title}</div>
//                 }
//             </Link>
//         )
//     }else {
//         return (
//             <>
//                 {
//                     badge ?
//                         <div className="relative">
//                     <span
//                         className="absolute -top-[10px] -right-[10px] w-[20px] h-[20px] bg-green-200 rounded-full flex justify-center items-center text-white text-xsmall">
//                         {badge}
//                     </span>
//                             <i style={{fontSize: `${size}px`}} className={`${icon}`}>
//                                 {span}
//                             </i>
//                         </div>
//                         :
//                         <i style={{fontSize: `${size}px`}} className={`${icon}`}>
//                             {span}
//                         </i>
//                 }
//
//                 {
//                     title &&
//                     <div
//                         className={` ${hideTitleOnMobile ? 'hidden xl:inline-block' : 'inline-block'} ${titleClassName} ml-1`}>{title}</div>
//                 }
//             </>
//         )
//     }
// }
