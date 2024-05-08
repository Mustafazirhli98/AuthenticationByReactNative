import { StyleSheet, Text, View } from "react-native"
import { ColorPalette } from "../constants/ColorPalette"
import WelcomeUser from "../components/ui/svg/WelcomeUser"

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <WelcomeUser />
            <Text style={styles.title}>WELCOME</Text>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: ColorPalette.success
    },
    title: {
        color: ColorPalette.primary,
        marginTop: 18,
        fontSize: 18,
    }
})

