import {createContext, ReactNode, useState} from "react";
import {ProductType} from "@/types/api/Product";
import {EntityType} from "@/types";

interface props {
    children: ReactNode
}

export interface ProductItem {
    productId: number,
    title: string,
    img?: string,
    width?: number,
    height?: number,
    price: number,
    sell_price: number | undefined,
    quantity: number
}

export const BasketContext = createContext<{
    basketItems: Array<ProductItem>
    addItem: (product: EntityType<ProductType>)=> void
    increaseItem: (productId: number)=> void,
    decreaseItem: (productId: number)=> void,
    deleteItem: (productId: number)=> void,
    getItem: (productId: number)=> undefined | ProductItem
}>({
    basketItems : [],
    addItem: (product: EntityType<ProductType>)=> {},
    increaseItem: (productId: number)=> {},
    decreaseItem: (productId: number)=> {},
    deleteItem: (productId: number)=> {},
    getItem: (productId: number)=> undefined
})

export const BasketContextProvider = ({children}:props)=>{
    const [basketItems, setBasketItems] = useState<Array<ProductItem>>([])

    const addItemHandler = (product: EntityType<ProductType>)=> {
        const newProduct: ProductItem = {
            productId: product.id,
            title: product.attributes.title,
            img: product.attributes.thumbnail?.data?.attributes.url,
            width: product.attributes.thumbnail?.data?.attributes.width,
            height: product.attributes.thumbnail?.data?.attributes.height,
            price: product.attributes.price,
            sell_price: product.attributes.sell_price,
            quantity: 1

        }

        setBasketItems(prevState => [...prevState, newProduct])
        console.log("basketItems", basketItems)
    }

    const increaseItemHandler = (productId: number)=> {
        const newBasket = basketItems.map((item)=>{
            if (item.productId === productId){
                return {...item, quantity: item.quantity + 1}
            }
            return item
        })
        setBasketItems(newBasket)
    }

    const decreaseItemHandler = (productId: number)=> {
        const currentItem = basketItems.find((item)=> item.productId === productId)
        if(currentItem && currentItem.quantity === 1){
            deleteItemHandler(productId)
        }else {
            const newBasket = basketItems.map((item)=>{
                if (item.productId === productId){
                    return {...item, quantity: item.quantity - 1}
                }
                return item
            })
            setBasketItems(newBasket)
        }
    }

    const deleteItemHandler = (productId: number)=> {
        const newBasket = basketItems.filter((item)=> item.productId !== productId)
        setBasketItems(newBasket)
    }

    const getItemHandler = (productId: number)=>{
        return basketItems.find((item)=> item.productId === productId)
    }

    return(
        <BasketContext.Provider value={{basketItems: basketItems, addItem: addItemHandler, increaseItem: increaseItemHandler, decreaseItem: decreaseItemHandler, deleteItem: deleteItemHandler, getItem: getItemHandler}}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContext