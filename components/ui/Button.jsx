import { Pressable, Text, View } from "react-native"

const Button = ({ children, style }) => {
    return (
        <Pressable>
            <View>
                <Text style={style}>{children}</Text>
            </View>
        </Pressable >

    )
}

export default Button