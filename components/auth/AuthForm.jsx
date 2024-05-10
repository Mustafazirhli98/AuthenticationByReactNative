import { StyleSheet, View } from "react-native"
import Input from "./Input"
import Button from "../ui/Button"
import { useState } from "react"
import { ColorPalette } from "../../constants/ColorPalette"

const AuthForm = ({ isLogin, onSubmit, isCredentialsValid }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")



    const onChangeInput = (type, enteredText) => {
        if (type === "email") {
            setEmail(enteredText)
        } if (type === "password") {
            setPassword(enteredText)
        } if (type === "confirmPassword") {
            setConfirmPassword(enteredText)
        }
    }
    const submitHandler = () => {
        onSubmit({
            email,
            password,
            confirmPassword
        })
    }
    return (
        <View style={styles.container}>
            <View>
                <Input
                    label="Email"
                    onChangeText={onChangeInput.bind(this, "email")}
                    isValid={isCredentialsValid.emailValid}
                    keyboardType={"email-address"}
                />
                <Input
                    label="Password"
                    onChangeText={onChangeInput.bind(this, "password")}
                    isValid={isCredentialsValid.passwordValid}
                    keyboardType={"number-pad"}
                    isLogin={isLogin}
                    secure={true}
                />
                {!isLogin && (
                    <Input label={"Confirm your password"}
                        onChangeText={onChangeInput.bind(this, "confirmPassword")}
                        isValid={isCredentialsValid.confirmPasswordValid}
                        keyboardType={"number-pad"}
                        secure={true}
                    />
                )}
            </View>
            <View style={styles.buttonArea}>
                <Button
                    onPress={submitHandler}
                    style={styles.button}>
                    {isLogin ? "Log in" : "Sign up"}
                </Button>
            </View>
        </View>
    )
}

export default AuthForm

const styles = StyleSheet.create({
    buttonArea: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8
    },
    button: {
        textAlign: "center",
        borderWidth: 1,
        width: 70,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 4,
        fontSize: 14,
        fontWeight: "bold",
    }
})

