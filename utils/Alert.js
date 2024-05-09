import { Alert } from "react-native";
import { errorMessages } from "../constants/ErrorMesages";

export const showAlert = (validations) => {
    const { isLogin, isEmailValid, isPasswordValid, isConfirmPasswordValid } = validations

    if (isLogin && (!isEmailValid && !isPasswordValid)) {
        return Alert.alert(errorMessages.loginError.title, errorMessages.loginError.body)
    }
    if (!isEmailValid) {
        return Alert.alert(errorMessages.signUpErrors.emailError.title, errorMessages.signUpErrors.emailError.body)
    }
    if (!isPasswordValid) {
        return Alert.alert(errorMessages.signUpErrors.passwordError.title, errorMessages.signUpErrors.passwordError.body)

    }
    if (!isLogin && !isConfirmPasswordValid) {
        return Alert.alert(errorMessages.signUpErrors.confirmPasswordError.title, errorMessages.signUpErrors.confirmPasswordError.body)
    }
}