import { createContext, useContext } from "react";
import axios from 'axios';
import React from "react";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState("Bitto");
    const url = "";

    const login = async (userData) => {
        try {
            const res = axios.post(url, { ...userData });
            console.log(res);
            setUser(res.data.user)
        } catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        setUser(null)
    }
    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}