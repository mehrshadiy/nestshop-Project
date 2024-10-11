import ApiClient from "@/api/config/ApiClient";

export async function getMenuApiCall() {
    return ApiClient.get('/menus',{
        params:{
            populate: '*'
        }
    })
}