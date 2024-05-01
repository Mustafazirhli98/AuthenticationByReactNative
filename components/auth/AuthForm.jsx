import { StyleSheet, View } from "react-native"
import Input from "./Input"
import Button from "../ui/Button"

const AuthForm = ({ isLogin, onChangeText, keyboardType }) => {
    return (
        <View style={styles.container}>
            <View>
                <Input
                    label="Email"
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                />
                <Input
                    label="Password"
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                />
                {!isLogin && (
                    <Input label={"Confirm your password"}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                    />
                )}
            </View>
            <View style={styles.buttonArea}>
                <Button style={styles.button}>{isLogin ? "Log in" : "Sign up"}</Button>
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

