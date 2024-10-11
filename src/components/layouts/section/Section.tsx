import React from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    className?: string
    children: React.ReactNode
}

export function Section({className='', children}: Props) {
    return (
        <section className={twMerge("container px-4 mx-auto mb-[68px]" ,className)}>
            {children}
        </section>
    );
}