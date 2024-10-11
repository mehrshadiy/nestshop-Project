import apiClient from "@/api/config/ApiClient";
import {CategoryType} from "@/types/api/Category";
import {ApiResponseType} from "@/types";

export async function getFeaturedCategoryApiCall():Promise<ApiResponseType<CategoryType>> {
    return apiClient.get('/categories',{
        params:{
            populate: 'thumbnail',
            filters: {
                is_featured: {
                    $eq: true,
                },
            },
        }
    })
}