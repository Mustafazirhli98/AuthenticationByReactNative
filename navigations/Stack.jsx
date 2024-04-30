import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignupScreen from "../screens/SignupScreen"
import WelcomeScreen from "../screens/WelcomeScreen"
import LoginScreen from "../screens/LoginScreen"
import { NavigationContainer } from "@react-navigation/native"

const Stack = () => {
    const Stack = createNativeStackNavigator()

    const AuthStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
            </Stack.Navigator>
        )
    }

    const AuthenticatedStack = () => {
        return (
            <Stack.Navigator name="WelcomeScreen" component={<WelcomeScreen />} />
        )
    }
    return (
        <AuthStack />
    )
}

export default Stack