import {ImageView} from "@/components";
import Link from "next/link";

interface Props {

}

export default function NotFound({}: Props) {
    return (
        <>
            {
                // <!-- 404 Form Start -->
            }
                <section className="container mt-[100px] font-lato md:mb-[228px]">
                    <div className="flex flex-col justify-center items-center">
                        <ImageView alt={'logo 404'} src={'/assets/images/404 1.png'} height={194} width={510}
                                   classname={'mb-4'}/>
                        <h1 className="text-heading3 md:text-display2 mb-[22px]">Page Not Found</h1>
                        <p className="mb-[34px] text-medium text-gray-500 md:px-[360px] text-center">
                            The link you clicked may be broken or the page may have been removed. visit the
                            <Link href={'/'} className={'text-green-200 text-medium mx-1'}>Homepage</Link>
                            or
                            <Link className={'text-green-200 text-medium mx-1'} href={'/contact'}>Contact</Link>
                            us about the problem
                        </p>
                        {
                            // <form name="search-form" action="#" method="post"
                            //       className="flex items-center border-gray-500 text-medium border rounded-xl pr-[170px] py-5 mb-6">
                            //     <button id="text" className="mr-3 pt-2 pl-[15px]" type="submit">
                            //         <i className="icon-search text-[22px]"></i>
                            //     </button>
                            //     <input type="text" name="search_text" placeholder="Enter your keywords..."
                            //            className="text-xsmall text-gray-400 border-gray-300 w-full focus:outline-none"/>
                            // </form>
                        }
                    </div>
                </section>
                {
                    // <!-- 404 Form End -->
                }
        </>
    )
}