import {ImageView} from "@/components/common/image-view";
import React from "react";
import Link from "next/link";

export function Logo() {
    return (
        <Link href={'/'}>
            <ImageView src={"/assets/images/Logo.png"} alt={"logo"} width={117} height={242} classname={"w-[117px] lg:w-[242px]"}/>
        </Link>
    );
}
