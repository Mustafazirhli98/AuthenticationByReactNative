import { Pressable, Text, View } from "react-native"

const FlatButton = ({ children, style, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View>
                <Text style={style}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default FlatButton