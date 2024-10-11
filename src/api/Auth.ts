import ApiClient from "@/api/config/ApiClient";
import {AuthResponseType} from "@/types/api/Auth";

interface RegisterData {
    username: string,
    email: string,
    password: string
}

interface LoginData {
    identifier: string;
    password: string
}

export function registerApiCall(data: RegisterData) :Promise<AuthResponseType> {
    return(
        ApiClient.post('/auth/local/register', data)
    )
}

export function loginApiCall(data: LoginData):Promise<AuthResponseType> {
    return(
        ApiClient.post('/auth/local', data)
    )
}

