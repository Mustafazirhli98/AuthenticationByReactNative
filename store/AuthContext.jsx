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
    }
    const onLogOut = () => {
        setAuthToken(null)
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