import {IconBox} from "@/components/common/ui/icon-box";
import React, {useState, MouseEvent} from "react";
import Link from "next/link";
import {EntityType, MenuItemType} from "@/types";
import {useMenu} from "@/hooks/use-menu";
import {useOverlay} from "@/hooks/use-overlay";

export function Menu() {

    const [showCategoryMenu , setShowCategoryMenu] = useState<boolean>(false)

    const {data: mainMenuItems} = useMenu({position:'main_menu'})
    const {data: browsCategoryItem} = useMenu({position:'brows-category'})

    useOverlay({
        onClick: ()=>{
            setShowCategoryMenu(false)
        }
    })

    const categoryBtnClickHandler = (e: MouseEvent)=>{
        e.stopPropagation()
        setShowCategoryMenu(prevState => !prevState)
    }

    const categoryBodyClickHandler =(e: MouseEvent)=>{
        e.stopPropagation()
    }

    return (
        <>
            <div className={'relative'}>
                <div onClick={categoryBtnClickHandler} className="inline-flex cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                    <IconBox icon={'icon-apps'} title={'Browse All Categories'} size={24} link={'#'} titleClassName={"text-medium"}/>
                    <IconBox icon={"icon-angle-small-down"} size={24}/>
                </div>
                <div onClick={categoryBodyClickHandler} className={`${showCategoryMenu ? 'flex' : 'hidden' } lg:absolute z-20 bg-white left-0 top-16 lg:w-[500px] rounded-[5px] lg:border-[1px] lg:border-green-300 pt-[30px] lg:p-[30px] hover:cursor-default`}>
                    <div id="all_cat_inner_box" className="flex flex-wrap justify-between gap-y-[15px]">
                        {
                            browsCategoryItem &&
                            browsCategoryItem.data.map((item: EntityType<MenuItemType>,index:number)=>{
                                return(
                                    <IconBox key={index} icon={item.attributes.icon_name} size={30}
                                             link={item.attributes.link}
                                             linkClassName={"gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300"}
                                             title={item.attributes.title}
                                             titleClassName={"text-heading-sm text-blue-300"}
                                             path={item.attributes.icon_path}/>
                                )
                            })
                        }

                        {/*
                            browsCategoriesMock.map((item, index) => {
                                return <IconBox key={index} icon={item.icon} link={item.link} title={item.title}
                                                titleClassName={"text-heading-sm text-blue-300"}
                                                linkClassName={"flex items-center gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 cursor-pointer"}
                                                path={item.iconPath}/>
                            })
                        */}

                        <div id="more_categories"
                             className="cursor-pointer flex gap-4 items-center lg:justify-center w-full mt-[17px]">
                            <i className="icon-add text-[24px]"></i>
                            <div className="text-heading-sm text-blue-300">More Categories</div>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
                    {
                        mainMenuItems &&
                        mainMenuItems.data.map((item: EntityType<MenuItemType>, index: number) => {
                            return (
                                <li key={index}>
                                    {
                                        item.attributes.icon_name ?
                                            <IconBox icon={item.attributes.icon_name} title={item.attributes.title}
                                                     path={item.attributes.icon_path} link={item.attributes.link}
                                                     size={24}/>
                                            : <Link href={item.attributes.link}>{item.attributes.title}</Link>
                                    }
                                </li>
                            )
                        })
                    }

                    {/*
                        menuMock.map((item, index)=>{
                            return(
                                <li>
                                    {
                                        item.icon ? <IconBox {...item} size={24}/>
                                            : <Link href={item.link}>{item.title}</Link>
                                    }
                                </li>
                            )
                        })
                    */}
                </ul>
            </nav>
        </>
    );
}
