import {useEffect} from "react";

interface Prop {
    onClick: () => void
}
export function useOverlay({onClick}: Prop) {
    useEffect(()=>{
        const eventHandler = ()=>{
            onClick()
        }
        document.addEventListener('click',eventHandler)

        return ()=>{
            document.removeEventListener('click',eventHandler)
        }
    },[])
}