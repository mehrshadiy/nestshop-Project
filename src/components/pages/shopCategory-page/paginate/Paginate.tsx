import { IconBox } from "@/components";
import { Dispatch, SetStateAction } from "react";
import { MetaType } from "@/types";

interface Props {
    data: MetaType,
    pageSetter: Dispatch<SetStateAction<number>>
}

export function Paginate({ data, pageSetter }: Props) {
    let pages = [];
    let pageNum = data.pagination.page;
    let totalPage = Math.ceil(data.pagination.total / data.pagination.pageSize);
    let paginateLength = 5;

    for (let i = pageNum; i <= totalPage; i++) {
        pages.push(i);
    }

    const scrollToPosition = () => {
        setTimeout(() => {
            window.scroll({
                top: 500,
                behavior: 'smooth'
            });
        }, 300);
    };

    const decreament = () => {
        if (pageNum > 1) {
            pageSetter(pageNum - 1);
            scrollToPosition();
        }
    };
    const increament = () => {
        if (pageNum < totalPage) {
            pageSetter(pageNum + 1);
            scrollToPosition();
        }
    };

    pages = pages.splice(0, paginateLength);

    if (totalPage === 0) {
        return (
            <div className="flex justify-center items-center mt-24 col-span-2 2xl:col-span-3 text-secondary-400 text-3xl font-bold">
                No product found!
            </div>
        );
    }

    const buttonClass = 'cursor-pointer border border-blue-300 bg-white text-blue-300 hover:bg-blue-300 hover:text-white active:bg-blue-300 active:text-white h-12 w-12 flex items-center justify-center rounded-full font-bold';

    return (
        <ul className="flex gap-3 justify-center items-center mt-10 col-span-2 2xl:col-span-3">
            {pages[0] !== 1 && (
                <li onClick={decreament} className={buttonClass}>
                    <IconBox icon={'icon-angle-small-left'}/>
                </li>
            )}

            {pageNum !== 1 && (
                <li onClick={() => { pageSetter(1); scrollToPosition(); }}
                    className={buttonClass}>
                    1
                </li>
            )}

            {pages[0] > 2 && (
                <li className={`${buttonClass} cursor-default`}>
                    ...
                </li>
            )}

            {data && pages.map((value: number | string, index) => (
                <li key={index} onClick={() => { pageSetter(Number(value)); scrollToPosition(); }}
                    className={`${buttonClass} ${value === pageNum ? 'bg-blue-300 text-white' : ''}`}>
                    {value}
                </li>
            ))}

            {pages[pages.length - 1] !== totalPage && pages[0] < totalPage - paginateLength && (
                <li className={`${buttonClass} cursor-default`}>
                    ...
                </li>
            )}

            {!pages.includes(totalPage) && (
                <li onClick={() => { pageSetter(totalPage); scrollToPosition(); }}
                    className={buttonClass}>
                    {totalPage}
                </li>
            )}

            {pageNum !== totalPage && (
                <li onClick={increament} className={buttonClass}>
                    <IconBox icon={'icon-angle-small-right'} />
                </li>
            )}
        </ul>
    );
}

