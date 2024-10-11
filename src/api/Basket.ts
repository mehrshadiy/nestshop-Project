import ApiClient from "@/api/config/ApiClient";
import {ApiSingleResponseType} from "@/types";
import {BasketType, UpdateBasketData} from "@/types/api/Basket";
import apiClient from "@/api/config/ApiClient";

export async function basketApiCall(): Promise<ApiSingleResponseType<BasketType>> {

    const token = window.localStorage.getItem('token');
    const uuid = window.localStorage.getItem('uuid');

    if (!token && !uuid){
        const response: ApiSingleResponseType<BasketType> = await ApiClient.post('/my-basket')
        window.localStorage.setItem('uuid', response.data.attributes.uuid)
        return response;
    }

    if (uuid){
        return await ApiClient.get('/my-basket', {
            params: {
                uuid: uuid
            }
        })
    }

    return await ApiClient.get('/my-basket')
}

export async function updateBasketApiCall(data: UpdateBasketData): Promise<ApiSingleResponseType<BasketType>> {
    const uuid = window.localStorage.getItem('uuid');

    if (uuid){
        return await ApiClient.put('/my-basket',{
            data: data
        },{
            params:{
                uuid: uuid
            }
        })
    }

    return await ApiClient.put('/my-basket',{
        data: data
    })
}

export async function UUID2UserApiCall(uuid: string): Promise<ApiSingleResponseType<BasketType>> {
    return await apiClient.put('/basket2User/' + uuid)
}