import apiClient from "@/api/config/ApiClient";
import {ApiResponseType, ApiSingleResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";

// interface Props {
//     populate?: Array<'thumbnail'|'categories'|'gallery'>;
//     filters?: {
//         is_popular?: boolean
//         is_popular_fruit?: boolean
//         is_best_seller?: boolean
//     }
// }
//
// interface Filters {
//     is_popular?: {$eq: boolean}
//     is_popular_fruit?: {$eq: boolean}
//     is_best_seller?: {$eq: boolean}
// }
// export  function getAllProductsApiCall({populate,filters}: Props): Promise<ApiResponseType<ProductType>> {
//     const customFilter: Filters ={};
//
//     filters?.is_popular && (customFilter.is_popular = {$eq: filters?.is_popular})
//     filters?.is_popular_fruit && (customFilter.is_popular = {$eq: filters?.is_popular_fruit})
//     filters?.is_best_seller && (customFilter.is_best_seller = {$eq: filters?.is_best_seller})
//
//     return apiClient.get('/products',{
//         params:{
//             populate: populate?.join(','),
//             filters: customFilter
//         }
//     })
// }

interface Props {
    id?: number | string[] | undefined | string
    populate?: Array<'thumbnail'|'categories'|'gallery'|'*'>;
    filters?: {}
    sort?: Array<string>
    pagination?: {
        withCount?: boolean,
        page?: number,
        pageSize?: number,
        start?: number,
        limit?: number
    }
}

interface SingleProps {
    id?: number | string[] | undefined | string
    populate?: Array<'thumbnail'|'categories'|'gallery'|'*'>;
}

export  function getAllProductsApiCall({populate,filters = {}, sort = [], pagination = {} }: Props  ): Promise<ApiResponseType<ProductType>> {

    return apiClient.get('/products',{
        params:{
            populate: populate?.join(','),
            filters: filters,
            sort: sort,
            pagination: pagination
        }
    })
}

export function getOneProductsApiCall({id,populate}: SingleProps): Promise<ApiSingleResponseType<ProductType>> {
    return apiClient.get(`/products/${id}`,
        {
            params: {
                populate: populate?.join(','),
            }
        }

    )
}