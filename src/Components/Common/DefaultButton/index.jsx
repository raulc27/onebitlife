import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

export default function DefaultButton({
    buttonText,
    handlePress,
    width,
    height
}){
    return(
        <TouchableOpacity
        activeOpacity={0.7}
        onPress={handlePress}
        >
            <Text>{buttonText}</Text>
        </TouchableOpacity>
    )
}