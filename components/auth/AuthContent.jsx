import { Alert, StyleSheet, Text, View } from "react-native"
import AuthForm from "./AuthForm"
import FlatButton from "../ui/FlatButton"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { errorMessages } from "../../constants/ErrorMesages"
import { showAlert } from "../../utils/Alert"
import { ColorPalette } from "../../constants/ColorPalette"

const AuthContent = ({ isLogin, AuthenticateHandler }) => {
    const navigation = useNavigation()
    const [errorMessage, setErrorMessage] = useState("");
    const [isCredentialsValid, setIsCredentialsValid] = useState({
        emailValid: true,
        passwordValid: true,
        confirmPasswordValid: true
    })

    const switchAuthContent = () => {
        if (isLogin) {
            navigation.replace("SignupScreen")
        } else navigation.replace("LoginScreen")
    }

    const onSubmit = (credentials) => {
        let { email, password, confirmPassword } = credentials;

        email = email.trim()
        password = password.trim()

        const isEmailValid = email.includes("@");
        const isPasswordValid = password.length > 6 && password.length < 10
        const isConfirmPasswordValid = (password == confirmPassword) && confirmPassword != ""

        if (!isEmailValid ||
            !isPasswordValid ||
            (!isLogin && !isConfirmPasswordValid)
        ) {
            setIsCredentialsValid({
                emailValid: isEmailValid,
                passwordValid: isPasswordValid,
                confirmPasswordValid: isConfirmPasswordValid
            })
            showAlert({
                isLogin,
                isEmailValid,
                isPasswordValid,
                isConfirmPasswordValid
            })
            return;
        }
        AuthenticateHandler(email, password)
    }
    return (
        <View style={styles.container}>
            <AuthForm isLogin={isLogin} onSubmit={onSubmit} isCredentialsValid={isCredentialsValid} />
            <FlatButton
                onPress={switchAuthContent}
                style={styles.flatButton}>
                {isLogin ? "Create a new user" : "Log in instead"}
            </FlatButton>
        </View>
    )
}

export default AuthContent

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
    },
    flatButton: {
        textAlign: "center",
        marginTop: 10,
        color: ColorPalette.secondary,
    }
})