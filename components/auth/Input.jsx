import { StyleSheet, Text, TextInput, View } from "react-native"
import { ColorPalette } from "../../constants/ColorPalette"

const Input = ({ label, secure, keyboardType, onChangeText, isValid }) => {

    return (
        <View View style={styles.container} >
            <Text style={!isValid && styles.invalidLabel}>{label}</Text>
            <TextInput
                style={!isValid ? styles.invalidInput : styles.inputStyle}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                secureTextEntry={secure}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    inputStyle: {
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
    }
})