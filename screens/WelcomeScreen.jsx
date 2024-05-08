import { StyleSheet, Text, View } from "react-native"
import { ColorPalette } from "../constants/ColorPalette"

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                Welcome to AUTHENTICATION APP
            </Text>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ColorPalette.primary
    }
})

