import { Alert, StyleSheet, Text, View } from "react-native"
import AuthForm from "./AuthForm"
import FlatButton from "../ui/FlatButton"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"

const AuthContent = ({ isLogin, AuthenticateHandler }) => {
    const navigation = useNavigation()
    const [isCredentialsValid, setIsCredentialsValid] = useState({
        emailValid: false,
        passwordValid: false,
        confirmPasswordValid: false
    })

    const switchAuthContent = () => {
        if (isLogin) {
            navigation.replace("SignupScreen")
        } else navigation.replace("LoginScreen")
    }

    const onSubmit = async (credentials) => {
        let { email, password, confirmPassword } = credentials;

        email = email.trim()
        password = password.trim()

        const isEmailValid = email.includes("@");
        const isPasswordValid = password.length > 6 && password.length < 15
        const isconfirmPasswordValid = (password == confirmPassword)

        if (!isLogin && (!isEmailValid || !isPasswordValid || !isconfirmPasswordValid)) {
            Alert.alert("Uyarı!", "Kimlik bilgilerinizi istenilen biçimde girin.")
            setIsCredentialsValid({
                emailValid: isEmailValid,
                passwordValid: isPasswordValid,
                confirmPassword: isconfirmPasswordValid
            })
            return;
        }
        if (!isEmailValid || !isPasswordValid) {
            Alert.alert("Uyarı!", "Hatalı Login İşlemi")
            setIsCredentialsValid({
                emailValid: isEmailValid,
                passwordValid: isPasswordValid,
                confirmPassword: isconfirmPasswordValid
            })
        }
        AuthenticateHandler(email, password)
    }

    return (
        <View style={styles.container}>
            <AuthForm isLogin={isLogin} onSubmit={onSubmit} />
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
        marginTop: 10
    }
})