import {Footer} from "@/components/layouts/footer";
import {ReactNode} from "react";
import {Header} from "@/components/layouts/header";

interface Props {
    children: ReactNode
}

export function Layout({children} :Props) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}
