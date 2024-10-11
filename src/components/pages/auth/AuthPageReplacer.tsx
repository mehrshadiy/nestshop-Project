import React, {ReactNode} from "react";
import {useRouter} from "next/router";

interface Props {
    children: ReactNode
    route: "forgotPassword" | 'login' | 'register' | 'resetPassword'
}



export function AuthPageReplacer({children, route}: Props) {

    const router = useRouter()


    const replaceHandler = () => {
        router.replace(`/auth/${route}`)
    }


    return (
        <div className={'w-fit h-fit mx-1 my-0 p-0 inline-block'} onClick={()=>replaceHandler()}>
            {children}
        </div>
    )
}