import { useContext, useState } from "react"
import AuthContent from "../components/auth/AuthContent"
import { createUser } from "../service/http"
import { AuthContext } from "../store/AuthContext"
import LoadingOverlay from "../components/ui/LoadingOverlay"
import { Alert } from "react-native"
import { errorMessages } from "../constants/ErrorMesages"

const SignupScreen = () => {
    const context = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)

    const signupHandler = async (email, password) => {
        try {
            setIsLoading(true)
            const response = await createUser(email, password)
            context.onAuthenticate(response.data.idToken)
        }
        catch {
            Alert.alert(errorMessages.httpError.title, errorMessages.httpError.body)
        }
        setIsLoading(false)
    }

    if (isLoading) return <LoadingOverlay />
    return (
        <AuthContent AuthenticateHandler={signupHandler} />
    )
}

export default SignupScreen