import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SHOW_ALL, SENDING, RECEIVED } from '../../global';

export default class Footer extends Component {
    render() {
        const { container, button, buttonText, btnCenter } = styles;
        const { replaceState } = this.props;
        return (
            <View style={container}>
                <TouchableOpacity style={button} onPress={() => replaceState(SHOW_ALL)}>
                    <Text style={buttonText}>{SHOW_ALL}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={btnCenter} onPress={() => replaceState(SENDING)}>
                    <Text style={buttonText}>{SENDING}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={button} onPress={() => replaceState(RECEIVED)}>
                    <Text style={buttonText}>{RECEIVED}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 12,
        backgroundColor: 'lightblue'
    },
    button: {
        flex: 1,
    },
    btnCenter: {
        flex: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: 'black'
    },
    buttonText: {
        textAlign: 'center'
    }
});
