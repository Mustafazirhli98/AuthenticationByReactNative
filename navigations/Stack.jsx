import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignupScreen from "../screens/SignupScreen"
import WelcomeScreen from "../screens/WelcomeScreen"
import LoginScreen from "../screens/LoginScreen"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../store/AuthContext"
import { ColorPalette } from "../constants/ColorPalette"
import { Ionicons } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import * as SplashScreen from "expo-splash-screen"
import { Alert } from "react-native"

const Stack = () => {
    const Stack = createNativeStackNavigator()
    const context = useContext(AuthContext)

    const AuthStack = () => {
        const [isFetchingToken, setIsFetchingToken] = useState(true)

        useEffect(() => {
            const fetchToken = async () => {
                SplashScreen.preventAutoHideAsync()
                const storedToken = await AsyncStorage.getItem("token")
                if (storedToken) {
                    context.onAuthenticate(storedToken)
                }
                setIsFetchingToken(false)
                SplashScreen.hideAsync()
            }
            fetchToken()
        }, [isFetchingToken])

        return (
            <Stack.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: ColorPalette.blue
                }
            }}>
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
                <Stack.Screen
                    name="WelcomeScreen"
                    component={WelcomeScreen}
                    options={{
                        title: "Welcome",
                        headerStyle: {
                            backgroundColor: ColorPalette.blue
                        },
                        headerRight: ({ tintColor }) => (
                            <Ionicons
                                name="exit-outline"
                                size={30}
                                color={tintColor}
                                onPress={() => {
                                    Alert.alert("You are about to leave!", "Are you sure to log out?",
                                        [
                                            {
                                                text: "no",
                                                style: "cancel",
                                            },
                                            {
                                                text: "yes",
                                                style: "default",
                                                onPress: context.onLogOut
                                            }
                                        ]
                                    )
                                }}
                            />
                        ),
                    }}
                />
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