import { createContext, useState } from "react";

const initialValues = {
    token: "",
    isAuthenticated: false,
    authenticate: () => { },
    logOut: () => { }
}

export const AuthContext = createContext(initialValues)


const AuthContextProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null)

    const authenticate = (token) => {
        setAuthToken(token)
    }
    const logOut = () => { }

    const value = {
        token: authToken,
        isAuthenticated: !!authToken,
        authenticate: authenticate,
        logOut: logOut
    }

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export default AuthContextProvider