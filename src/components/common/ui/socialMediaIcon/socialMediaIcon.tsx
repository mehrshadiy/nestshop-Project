import Link from "next/link";
import {ImageView} from "@/components";

export function SocialMediaIcon() {
    return (
        <div className={'flex gap-2'}>
            <Link href={'#'}>
                <ImageView
                    src={'/assets/images/about/akar-icons_messanger-fill.svg'}
                    alt={'icons_messanger'} width={20} height={20}
                    classname={'w-4 h-4 xl:w-5 xl:h-5'}/>
            </Link>
            <Link href={'#'}>
                <ImageView
                    src={'/assets/images/about/akar-icons_twitter-fill.svg'}
                    alt={'icons_messanger'} width={20} height={20}
                    classname={'w-4 h-4 xl:w-5 xl:h-5'}/>
            </Link>
            <Link href={'#'}>
                <ImageView
                    src={'/assets/images/about/akar-icons_youtube-fill.svg'}
                    alt={'icons_messanger'} width={20} height={20}
                    classname={'w-4 h-4 xl:w-5 xl:h-5'}/>
            </Link>
            <Link href={'#'}>
                <ImageView
                    src={'/assets/images/about/akar-icons_instagram-fill.svg'}
                    alt={'icons_messanger'} width={20} height={20}
                    classname={'w-4 h-4 xl:w-5 xl:h-5'}/>
            </Link>
        </div>
    );
}