import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '0986729636',
            password: '123456',
            confirmPassword: '123456'
        }
    }
    render() {
        const { container, input, button, text } = styles;
        const { phone, password, confirmPassword } = this.state;
        return (
            <View style={container}>
                <TextInput
                    style={input}
                    onChangeText={phone => this.setState({ phone })}
                    value={phone}
                    placeholder='Phone number'
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    style={input}
                    onChangeText={password => this.setState({ password })}
                    value={password}
                    secureTextEntry
                    placeholder='Password'
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    style={input}
                    onChangeText={confirmPassword => this.setState({ confirmPassword })}
                    value={confirmPassword}
                    secureTextEntry
                    placeholder='Confirm password'
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={button} onPress={this.signUp.bind(this)} >
                    <Text style={text}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
    signUp() {
        const { phone, password, confirmPassword } = this.state;
        const { showAlert } = this.props;
        if (password === '' || confirmPassword === '' || phone === '') {
            showAlert('Please enter your fields');
            return;
        }
        if (password !== confirmPassword) {
            showAlert('Passwords do not match!');
            return;
        }
    }
}
