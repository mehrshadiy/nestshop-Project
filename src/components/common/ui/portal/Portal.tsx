import {ReactNode, useEffect} from "react";
import {createPortal} from "react-dom";

interface Props {
    children : ReactNode
    onClose: () => void
}

export function Portal({children, onClose}: Props) {

    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'auto'
        }
    }, []);

    return createPortal(
        <div className={"fixed top-0 right-0 left-0 bottom-0 z-50 bg-black bg-opacity-40 flex justify-center items-center"} onClick={onClose}>
            {children}
        </div>,
        document.getElementById("portal")!
    );
}