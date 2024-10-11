import React from "react";
import {Portal} from "@/components";

interface Props {
    children: React.ReactNode
    title: string
    closeModal: () => void
    bodyClassName?: string
}

export function Modal({children, title, closeModal, bodyClassName= ''}: Props) {
    return(
        <Portal onClose={closeModal}>
            <div className={`z-10 min-w-[100vw] md:min-w-[60vw] xl:min-w-[50vw] min-h-[100vh] md:min-h-[50vh] max-h-[90vh] overflow-auto md:rounded-xl bg-green-50`} onClick={(e)=>e.stopPropagation()}>
                <div className={`flex justify-between py-4 px-7 bg-green-200 text-white md:rounded-t-xl`}>
                    <h3 className={"font-bold text-lg"}>{title}</h3>
                    <div onClick={closeModal} className={"cursor-pointer"}>
                        <span className={"font-bold text-lg"}>X</span>
                    </div>
                </div>
                <div className={`${bodyClassName} md:rounded-b-xl`}>
                    {children}
                </div>
            </div>
        </Portal>
    );
}