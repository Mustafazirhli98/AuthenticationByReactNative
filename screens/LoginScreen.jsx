import { useContext, useState } from "react"
import AuthContent from "../components/auth/AuthContent"
import { AuthContext } from "../store/AuthContext"
import { logInUser } from "../service/http"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { Alert } from "react-native"
import { errorMessages } from "../constants/ErrorMesages"

const LoginScreen = () => {

    const context = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)

    const loginHandler = async (email, password) => {
        try {
            setIsLoading(true)
            const response = await logInUser(email, password)
            context.onAuthenticate(response.data.idToken)
        } catch {
            Alert.alert(errorMessages.httpError.title, errorMessages.httpError.body)
        }
        setIsLoading(false)
    }

    if (isLoading) return <LoadingOverlay />
    return (
        <AuthContent isLogin AuthenticateHandler={loginHandler} />
    )
}

export default LoginScreen

