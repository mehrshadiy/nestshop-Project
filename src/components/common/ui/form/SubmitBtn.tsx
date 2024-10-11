import React from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    btnText: string
    className?: string
}

export function SubmitBtn({btnText, className = ''}: Props) {
    return (
        <button type={'submit'} className={twMerge('bg-green-200 text-white font-bold px-4 py-1 rounded-md', className)}>{btnText}</button>
    );
}