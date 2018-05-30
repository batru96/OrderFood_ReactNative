import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import Header from './cart/Header';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: ''
        };
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    updateUserInfo() {
        const { name, email, phone } = this.state;
        if (this.validateEmail(email)) console.log('YES');
        else console.log('NO'); 
    }

    render() {
        const { navigation } = this.props;
        const { container, input, button, buttonText } = styles;
        const { name, email, phone } = this.state;
        return (
            <View style={container}>
                <Header navigation={navigation} title='Setting' />
                <TextInput
                    style={input}
                    placeholder='Bucky Roberts'
                    value={name}
                    underlineColorAndroid='transparent'
                    onChangeText={text => this.setState({ name: text })}
                />
                <TextInput
                    style={input}
                    placeholder='buckyroberts@example.com'
                    value={email}
                    keyboardType='email-address'
                    underlineColorAndroid='transparent'
                    onChangeText={text => this.setState({ email: text })}
                />
                <TextInput
                    style={input}
                    placeholder='0986729636'
                    value={phone}
                    keyboardType='phone-pad'
                    underlineColorAndroid='transparent'
                    onChangeText={text => this.setState({ phone: text })}
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={button} onPress={this.updateUserInfo.bind(this)}>
                        <Text style={buttonText}>Change</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: 'lightblue',
        paddingHorizontal: 8,
        color: 'gray',
        margin: 4
    },
    button: {
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: width / 2,
        borderColor: 'blue',
    },
    buttonText: {
        color: 'gray'
    }
});

export default Setting;
