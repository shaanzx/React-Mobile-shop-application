import {jwtDecode} from "jwt-decode";
import type {UserData} from "../model/userData.ts";

export const isTokenExpired = (token : string) => {
    try {
        const {exp} = jwtDecode(token);
        if (!exp) {
            return true;
        }
        return Date.now() >= exp * 1000;
    }catch (error){
        console.error(error);
        return true;
    }
}

export const getUserFromToken = (token :string) => {
    return jwtDecode<UserData>(token)
;}