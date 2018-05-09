import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import md5 from 'md5';
import styles from './styles';
import savePhone from '../../api/savePhoneNumber';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '0986729636',
            password: '123456',
        };
    }

    render() {
        const { container, input, button, text } = styles;
        const { phone, password } = this.state;
        return (
            <View style={container}>
                <TextInput
                    style={input}
                    onChangeText={value => this.setState({ phone: value })}
                    value={phone}
                    placeholder='Phone number'
                    underlineColorAndroid='transparent'
                />
                <TextInput
                    style={input}
                    onChangeText={value => this.setState({ password: value })}
                    value={password}
                    secureTextEntry
                    placeholder='Phone number'
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity
                    style={button}
                    onPress={this.signInAnonymous.bind(this)}
                >
                    <Text style={text}>NO ACCOUNT - SIGN IN HERE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(SignIn);
