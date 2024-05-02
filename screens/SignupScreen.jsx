import { useContext } from "react"
import AuthContent from "../components/auth/AuthContent"
import { createUser } from "../service/http"
import { AuthContext } from "../store/AuthContext"

const SignupScreen = () => {
    const context = useContext(AuthContext)

    const signupHandler = async (email, password) => {
        try {
            const response = await createUser(email, password)
            context.onAuthenticate(response.data.idToken)
        }
        catch {
            console.log("authentication error")
        }
    }

    return (
        <AuthContent AuthenticateHandler={signupHandler} />
    )
}

export default SignupScreen