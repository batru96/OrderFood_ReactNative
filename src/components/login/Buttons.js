import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Buttons extends Component {
    render() {
        const { container, btnSignUp, btnsText, btnSignIn } = styles;
        const { onChange } = this.props;
        return (
            <View style={container}>
                <TouchableOpacity style={btnSignIn} onPress={() => onChange(1)}>
                    <Text style={btnsText}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={{ width: 8 }} />
                <TouchableOpacity style={btnSignUp} onPress={() => onChange(2)}>
                    <Text style={btnsText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8
    },
    btnSignUp: {
        flex: 1,
        backgroundColor: '#31756c',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnSignIn: {
        flex: 1,
        backgroundColor: '#9ad82b',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnsText: {
        color: 'white',
        margin: 8,
        fontFamily: 'nabila'
    }
});
