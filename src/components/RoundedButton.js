import  React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export const RoundedButton = ({
    style = {},
    TextStyle = {},
    size = 125,

    ...props
}) => {
    return (
        <TouchableOpacity style = {[stylles(size).radius, style]}>
            <Text style = {[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );

};

const styles = (size) => StyleSheet.create({ 
    radius: {
        borderRadius: size / 2,
        width: size,
        height: size,
        alignItems: 'center',
        borderColor: '#fff',
        borderWidth: 2
    },
    text: {color: '#fff', fontSize: size/3 },

});