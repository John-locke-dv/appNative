import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { withTheme } from 'react-native-elements';


const buttonWithBackground = props => {
    const content = (
        <View Style = {[styles.button, {backgrounColor: props.color}]}>
            <Text Style = {styles.text}>{props.text}</Text> 

        </View>
    )

    return<TouchableOpacity onpress={props.onPress}>{content}</TouchableOpacity>

}


const styles = StyleSheet.create ({
    button: {
        padding: 18,
        width: 210,
        borderRadius: 17,
        alignItems: 'center'
    },

    text: {
        color: 'withe',
        fontSize: 20
    }
});

export default buttonWithBackground;