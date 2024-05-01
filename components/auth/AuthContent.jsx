import { StyleSheet, Text, View } from "react-native"
import AuthForm from "./AuthForm"
import FlatButton from "../ui/FlatButton"
import { useNavigation } from "@react-navigation/native"

const AuthContent = ({ isLogin }) => {

    const navigation = useNavigation()

    const switchAuthContent = () => {
        if (isLogin) {
            navigation.replace("SignupScreen")
        } else navigation.replace("LoginScreen")
    }

    return (
        <View style={styles.container}>
            <AuthForm isLogin={isLogin} />
            <FlatButton
                onPress={switchAuthContent}
                style={styles.flatButton}>
                {isLogin ? "Create a new user" : "Log in instead"}
            </FlatButton>
        </View>
    )
}

export default AuthContent

const styles = StyleSheet.create({
    container: {
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        backgroundColor: "white",
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 8,
    },
    flatButton: {
        textAlign: "center",
        marginTop: 10
    }
})