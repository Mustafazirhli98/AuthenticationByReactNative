import { StyleSheet, View } from "react-native"
import Input from "./Input"
import Button from "../ui/Button"
import { useState } from "react"

const AuthForm = ({ isLogin, keyboardType, onSubmit }) => {

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
                    keyboardType={keyboardType}
                />
                <Input
                    label="Password"
                    onChangeText={onChangeInput.bind(this, "password")}
                    keyboardType={keyboardType}
                />
                {!isLogin && (
                    <Input label={"Confirm your password"}
                        onChangeText={onChangeInput.bind(this, "confirmPassword")}
                        keyboardType={keyboardType}
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
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 4
    }
})

