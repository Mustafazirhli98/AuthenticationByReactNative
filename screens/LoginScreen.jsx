import { useContext, useState } from "react"
import AuthContent from "../components/auth/AuthContent"
import { AuthContext } from "../store/AuthContext"
import { logInUser } from "../service/http"
import LoadingOverlay from "../components/ui/LoadingOverlay"

const LoginScreen = () => {

    const context = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)

    const loginHandler = async (email, password) => {
        try {
            setIsLoading(true)
            const response = await logInUser(email, password)
            context.onAuthenticate(response.data.idToken)
            setIsLoading(false)
        } catch {
            console.log("login error")
        }
    }

    if (isLoading) return <LoadingOverlay />
    return (
        <AuthContent isLogin AuthenticateHandler={loginHandler} />
    )
}

export default LoginScreen

