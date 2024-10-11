import {createContext, ReactNode, useReducer} from "react";
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
    productQuantity: number
}

type ActionType = { type: 'ADD_ITEM', product: EntityType<ProductType> } |
    {type: 'INCREASE_ITEM', productId: number} |
    {type: 'DECREASE_ITEM', productId: number} |
    {type: 'DELETE_ITEM', productId: number}


export const BasketContext = createContext<{
    basketItems: Array<ProductItem>
    addItem: (product: EntityType<ProductType>) => void
    increaseItem: (productId: number) => void,
    decreaseItem: (productId: number) => void,
    deleteItem: (productId: number) => void,
    getItem: (productId: number) => undefined | ProductItem
}>({
    basketItems: [],
    addItem: () => {},
    increaseItem: () => {},
    decreaseItem: () => {},
    deleteItem: () => {},
    getItem: () => undefined
})

const basketReducer = (currentState: ProductItem[], action: ActionType) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...currentState, {
                productId: action.product.id,
                title: action.product.attributes.title,
                img: action.product.attributes.thumbnail?.data?.attributes.url,
                width: action.product.attributes.thumbnail?.data?.attributes.width,
                height: action.product.attributes.thumbnail?.data?.attributes.height,
                price: action.product.attributes.price,
                sell_price: action.product.attributes.sell_price,
                quantity: 1,
                productQuantity: action.product.attributes.quantity
            }]
        case 'INCREASE_ITEM':
            return currentState.map((item) => {
                if (item.productId === action.productId) {
                    const newQuantity = item.quantity + 1
                    if (newQuantity <= item.productQuantity){
                        return {...item, quantity: newQuantity}
                    }
                    return item
                }
                return item
            })
        case 'DECREASE_ITEM':
            const currentProduct = currentState.find((item) => item.productId === action.productId)
            if (currentProduct && currentProduct.quantity === 1) {
                return currentState.filter((item) => item.productId !== action.productId)
            }

            return currentState.map((item) => {
                    if (item.productId === action.productId) {
                        return {...item, quantity: item.quantity - 1}
                    }
                    return item
                }
            )
        case 'DELETE_ITEM':
            return currentState.filter((item)=> item.productId !== action.productId)}
}

export const BasketContextProvider = ({children}: props) => {

    const [basketItems, dispatch] = useReducer(basketReducer, [])

    const addItemHandler = (product: EntityType<ProductType>) => {
        dispatch({type: 'ADD_ITEM', product: product})
    }

    const increaseItemHandler = (productId: number) => {
        dispatch({type: 'INCREASE_ITEM', productId: productId})
    }

    const decreaseItemHandler = (productId: number) => {
       dispatch({type: 'DECREASE_ITEM', productId: productId})
    }

    const deleteItemHandler = (productId: number) => {
       dispatch({type: 'DELETE_ITEM', productId: productId})
    }

    const getItemHandler = (productId: number) => {
       return basketItems.find((item)=> item.productId === productId)
    }

    return (
        <BasketContext.Provider value={{
            basketItems: basketItems,
            addItem: addItemHandler,
            increaseItem: increaseItemHandler,
            decreaseItem: decreaseItemHandler,
            deleteItem: deleteItemHandler,
            getItem: getItemHandler
        }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContext