import { StyleSheet, Text, TextInput, View } from "react-native"

const Input = ({ label, secure, keyboardType, onChangeText, isValid }) => {

    return (
        <View View style={styles.container} >
            <Text>{label}</Text>
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
        fontSize: 14
    },
    invalidInput: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#FF0000",
        fontSize: 12,
        marginVertical: 8,
        paddingVertical: 3,
        paddingHorizontal: 8,
        fontSize: 14
    }
})