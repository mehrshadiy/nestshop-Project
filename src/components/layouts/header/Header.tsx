import React, {useEffect, useState, MouseEvent} from 'react';
import {LoginModal, Logo, RegisterModal} from "@/components";
import {IconBox} from "@/components";
import {SearchForm} from "@/components/layouts";
import {Menu} from "@/components/layouts";
import Link from "next/link";
import {useOverlay} from "@/hooks/use-overlay";
import {BasketCard} from "@/components/common/product/product-card/BasketCard";
import {useModal} from "@/store/ModalContext";
import {useUser} from "@/store/AuthContext";
import {useBasket} from "@/hooks/use-basket";
import {useQueryClient} from "@tanstack/react-query";

export function Header() {

    const queryClient = useQueryClient()

    const {basketItems} = useBasket()

    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
    const [showBasketCard, setShowBasketCard] = useState<boolean>(false)

    // const basket = useContext(basketContext)

    const {currentModal, closeModal} = useModal()
    const {isLogin, logout} = useUser()

    useOverlay({
        onClick: () => {
            setShowMobileMenu(false)
        }
    })

    useOverlay({
        onClick: () => {
            setShowBasketCard(false)
        }
    })

    const menuBtnClickHandler = (e: MouseEvent) => {
        e.stopPropagation()
        setShowMobileMenu((prevState) => !prevState)
    }

    const menuBodyClickHandler = (e: MouseEvent) => {
        e.stopPropagation()
    }

    // const basketCardHandler = (e: MouseEvent)=>{
    //     e.stopPropagation()
    //     if (basket.basketItems.length > 0){
    //         setShowBasketCard ((prevState)=>!prevState)
    //     }
    // }

    const closeBasketCardHandler = () => {
        setShowBasketCard(false)
    }

    const basketCardBodyHandler = (e: MouseEvent) => {
        e.stopPropagation()
    }

    const accountHandler = () => {
        if (isLogin) {
            logout()
            queryClient.invalidateQueries({queryKey: ['get-basket']})
        } else {
            // openModal('login')
        }
    }

    useEffect(() => {
        if (showMobileMenu)
            document.body.style.overflowY = "hidden"
        else
            document.body.style.overflowY = "auto"
        return () => {
            document.body.style.overflowY = "auto"
        }
    }, [showMobileMenu])

    return (
        <>
            <header className="mb-[33px]">

                {currentModal == 'login' && <LoginModal onClose={closeModal}/>}
                {currentModal == 'register' && <RegisterModal onClose={closeModal}/>}
                <div className="container flex items-center justify-between py-4 md:py-6 xl:py-8">
                    <Logo/>
                    <div
                        className="border-2 border-green-150 rounded-[5px] max-w-[700px] w-full mx-[15px] px-[15px] hidden lg:inline-block">
                        <SearchForm inputClassName={"py-[15px]"}/>
                    </div>
                    <ul className="hidden lg:flex gap-5">
                        <li className="flex gap-2 cursor-pointer" onClick={accountHandler}>
                            <IconBox icon={'icon-user'} size={24} link={`${isLogin ? '#' : '/auth/login'}`}
                                     title={`${isLogin ? 'logout' : 'login/register'}`}
                                     titleClassName={"hidden xl:inline-block text-medium text-gray-500 font-lato"}
                                     hideTitleOnMobile={true}/>
                        </li>
                        <li className="flex gap-2 cursor-pointer">
                            <IconBox icon={'icon-shopping-cart'} size={24} title={'Card'}
                                     titleClassName={"hidden xl:inline-block text-medium text-gray-500 font-lato"}
                                     hideTitleOnMobile={true} badge={basketItems.length}
                                     onClick={(e) => {
                                         e.stopPropagation()
                                         setShowBasketCard(true)
                                     }}/>

                                <BasketCard onClick={basketCardBodyHandler} setShowBasketCard={setShowBasketCard}
                                            onClose={closeBasketCardHandler} showBasketCard={showBasketCard}/>
                        </li>
                    </ul>
                    <button onClick={menuBtnClickHandler}
                            className="flex flex-col justify-between py-[4px] lg:hidden w-[24px] h-[24px]">
                        <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                        <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                        <span className="w-full h-[1.5px] bg-black inline-block rounded"></span>
                    </button>
                </div>

                <div className="border-gray-200 border-y">
                    <div onClick={menuBodyClickHandler}
                         className={`${showMobileMenu ? 'left-0 fixed overflow-y-auto' : '-left-[100%] absolute'} container transition-all w-4/5 rounded-[24px] lg:rounded-[0px] lg:w-auto flex top-0 bottom-0 lg:static flex-col lg:flex-row justify-start lg:justify-between items-start pt-[16px] pl-[24px] py-[13px] lg:items-center h-[100vh] bg-white lg:h-[70px] mobile-menu z-50`}>
                        <Menu/>
                        <div className="hidden lg:flex items-center shrink-0 gap-3">
                            <IconBox icon={'icon-headset xl:text-[32px] 2xl:text-[36px] aspect-square'} size={30}
                                     link={'#'}/>
                            <div>
                                <Link href="tel:19008888"
                                      className="text-green-200 lg:text-heading6 xl:text-heading5 2xl:text-heading4">1900-8888</Link>
                                <div className="font-lato text-xsmall"><span
                                    className="hidden xl:inline-block">24/7 </span>Support Center
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container flex justify-between lg:hidden pt-[20px] pb-[16px] items-end">
                        <div className="border-[1px] border-green-150 rounded-[5px] w-full max-w-[220px] p-[6px]">
                            <SearchForm/>
                        </div>
                        <ul className="flex gap-5">
                            <li className="flex gap-2 cursor-pointer" onClick={accountHandler}>
                                <IconBox icon={'icon-user'} size={24} link={'#'}
                                         title={`${isLogin ? `logout` : 'login/register'}`}
                                         titleClassName={"hidden xl:inline-block text-medium text-gray-500 font-lato"}
                                         hideTitleOnMobile={true}
                                />
                            </li>
                            <li className="flex gap-2 cursor-pointer relative">
                                <IconBox icon={'icon-shopping-cart'} size={24} title={'Card'}
                                         titleClassName={"hidden xl:inline-block text-medium text-gray-500 font-lato"}
                                         hideTitleOnMobile={true} badge={basketItems.length}
                                         onClick={(e) =>{
                                             e.stopPropagation()
                                             setShowBasketCard(true)
                                         }
                                }/>

                                <BasketCard onClick={basketCardBodyHandler} setShowBasketCard={setShowBasketCard}
                                            onClose={closeBasketCardHandler} showBasketCard={showBasketCard}/>

                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

