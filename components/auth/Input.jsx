import { StyleSheet, Text, TextInput, View } from "react-native"
import { ColorPalette } from "../../constants/ColorPalette"
import Eye from "../ui/Eye"
import { useState } from "react"

const Input = ({ label, secure, keyboardType, onChangeText, isValid, isLogin }) => {

    const [isEyeOff, setIsEyeOff] = useState(true)
    const changeSecure = () => {
        setIsEyeOff(!isEyeOff)
    }

    const inputStyles = [styles.input]
    if (label === "Password" && isLogin) {
        inputStyles.push({ width: '86%' })
    } if (!isValid) {
        inputStyles.push(styles.invalidInput)
    }

    return (
        <View View style={styles.container} >
            <Text style={!isValid && styles.invalidLabel}>{label}</Text>
            <View style={label === "Password" && styles.inputContainer}>
                <TextInput
                    style={inputStyles}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    secureTextEntry={(isEyeOff && isLogin ) ? secure : !secure}
                />
                {
                    isLogin && <Eye isEyeOff={isEyeOff} changeSecure={changeSecure} style={styles.eyeIcon} />
                }
            </View>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 12,
        marginVertical: 8,
        paddingVertical: 3,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    invalidLabel: {
        color: ColorPalette.error
    },
    invalidInput: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: ColorPalette.error,
        fontSize: 12,
        marginVertical: 8,
        paddingVertical: 3,
        paddingHorizontal: 8,
        fontSize: 14
    },
    eyeIcon: {
        marginHorizontal: 5
    }
})