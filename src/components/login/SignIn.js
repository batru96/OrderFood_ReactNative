import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import md5 from 'md5';
import styles from './styles';
import savePhone from '../../api/savePhoneNumber';
import saveSignInState from '../../api/saveSignInState';

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
                    onPress={this.signIn.bind(this)}
                >
                    <Text style={text}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
    }

    signIn() {
        const { phone, password } = this.state;
        const { navigation, showAlert, dispatch } = this.props;
        if (phone === '' || password === '') {
            showAlert('Enter your fields');
            return;
        }

        const userRef = firebase.database().ref().child('User');
        userRef.once('value')
            .then(snapshot => {
                let isMatch = false;
                snapshot.forEach(user => {
                    if (user.key === phone) {
                        if (user.val().password === md5(password)) isMatch = true;
                    }
                });
                if (isMatch) {
                    dispatch({ type: 'CHANGE_PHONE', phone });
                    navigation.navigate({ routeName: 'HOME' });
                }
                else showAlert('Your information is not correct!');
            })
            .catch(err => console.log(err));
    }
}

export default connect()(SignIn);
