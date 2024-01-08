import axios from "axios";
import {React, createContext} from "react";
import { ApiUrl } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const Register = (name, email, password) => {
        axios.post(`${ApiUrl}/register`, {
            name, email, password
        }).then(res => {
            let userInfo = res.data;
            console.log(userInfo);
        })
        .catch(e => {
            console.log(`Register error ${e}`)
        })
    }

    return(
        <AuthContext.Provider value={{Register}}>{children}</AuthContext.Provider>
    )
}