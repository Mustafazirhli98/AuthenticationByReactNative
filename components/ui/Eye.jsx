import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { Pressable } from "react-native"

const Eye = ({ isEyeOff, changeSecure, style }) => {

    return (
        <Pressable onPress={changeSecure} style={style}>
            {
                isEyeOff ?
                    <Ionicons name="eye-off-outline" size={30} />
                    :
                    <Ionicons name="eye-outline" size={30} />
            }
        </Pressable >
    )
}


export default Eye