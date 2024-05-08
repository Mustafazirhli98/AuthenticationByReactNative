import { ActivityIndicator, StyleSheet, View } from "react-native"
import { ColorPalette } from "../../constants/ColorPalette"

const LoadingOverlay = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"xl"} color={ColorPalette.secondary} />
        </View>
    )
}

export default LoadingOverlay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})