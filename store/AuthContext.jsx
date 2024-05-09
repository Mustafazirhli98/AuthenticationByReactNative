import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

const initialValues = {
    token: "",
    isAuthenticated: false,
    onAuthenticate: () => { },
    onLogOut: () => { }
}

export const AuthContext = createContext(initialValues)


const AuthContextProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null)

    const onAuthenticate = (token) => {
        setAuthToken(token)
        AsyncStorage.setItem("token", token)
    }
    const onLogOut = () => {
        setAuthToken(null)
        AsyncStorage.removeItem("token")
    }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        onAuthenticate: onAuthenticate,
        onLogOut: onLogOut
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider