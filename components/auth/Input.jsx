import { StyleSheet, Text, TextInput, View } from "react-native"

const Input = ({ label, secure, keyboardType, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Text>{label}</Text>
            <TextInput
                style={styles.inputStyle}
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
    }
})