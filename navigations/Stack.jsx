import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignupScreen from "../screens/SignupScreen"
import WelcomeScreen from "../screens/WelcomeScreen"
import LoginScreen from "../screens/LoginScreen"
import { useContext } from "react"
import { AuthContext } from "../store/AuthContext"

const Stack = () => {
    const Stack = createNativeStackNavigator()
    const context = useContext(AuthContext)

    const AuthStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="LoginScreen"
                    component={LoginScreen}
                    options={{
                        title: "Log in"
                    }}
                />
                <Stack.Screen
                    name="SignupScreen"
                    component={SignupScreen}
                    options={{
                        title: "Sign up"
                    }}
                />
            </Stack.Navigator>
        )
    }

    const AuthenticatedStack = () => {
        return (
            <Stack.Navigator >
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            </Stack.Navigator>
        )
    }
    return (
        context.isAuthenticated ?
            <AuthenticatedStack />
            : <AuthStack />

    )
}

export default Stack