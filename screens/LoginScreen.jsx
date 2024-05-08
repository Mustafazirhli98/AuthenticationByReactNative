import { useContext } from "react"
import AuthContent from "../components/auth/AuthContent"
import { AuthContext } from "../store/AuthContext"
import { logInUser } from "../service/http"

const LoginScreen = () => {

    const context = useContext(AuthContext)

    const loginHandler = async (email, password) => {
        try {
            const response = await logInUser(email, password)
            context.onAuthenticate(response.data.idToken)
        } catch {
            console.log("login error")
        }
    }
    return (
        <AuthContent isLogin AuthenticateHandler={loginHandler} />
    )
}

export default LoginScreen

