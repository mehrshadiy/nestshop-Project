import React, { MouseEvent, Dispatch, SetStateAction} from "react";
import {BasketCardItem} from "@/components";
import Link from "next/link";
import {useBasket} from "@/hooks/use-basket";

interface Props {
    onClick: (e: MouseEvent) => void
    onClose: () => void
    setShowBasketCard: Dispatch<SetStateAction<boolean>>
    showBasketCard: boolean
}

export function BasketCard({onClick, onClose, setShowBasketCard, showBasketCard}: Props) {

    const {basketItems} = useBasket()
    const isProduct = basketItems.length > 0


    return (
        <>
        {
            isProduct ?
                <div onClick={onClick}
                     className={`fixed right-0 p-4 md:absolute transition-all duration-1000 overflow-y-auto lg:right-5 md:shadow-2xl w-full md:w-[450px] bg-white md:border md:border-green-150 md:rounded-xl h-[100vh] md:h-auto top-0 md:top-12 lg:top-24 ${(showBasketCard) ? 'inline-block' : 'hidden'}`}>
            <span
                className={'border rounded-lg block px-4 py-2 w-fit h-fit shadow-lg text-gray-800 hover:bg-gray-800 hover:text-white hover:shadow-md md:hidden'}
                onClick={(event) => {
                    event.stopPropagation()
                    setShowBasketCard(false)
                }}>
                X
            </span>
                    <ul className={'mb-10'}>
                        {
                            basketItems.map((basketItem, index) => {

                                const isLast = index === basketItems.length - 1

                                return (
                                    <BasketCardItem basketItem={basketItem} isLast={isLast}/>
                                )
                            })
                        }
                    </ul>
                    <Link href={'/yourCart'} onClick={onClose}
                          className={'bg-green-600 text-white font-bold rounded-3xl px-8 py-3 text-center'}>View Basket
                        &
                        Checkout</Link>
                </div>
                :
                <></>
        }
        </>
    );
}