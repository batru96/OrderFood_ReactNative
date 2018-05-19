import React, { Component } from 'react';
import { 
    View, TextInput, TouchableOpacity, Text, StyleSheet, Alert 
} from 'react-native';
import savePhone from '../../api/savePhoneNumber';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = { phone: '' };
    }
    
    submit() {
        const { phone } = this.state;
        if (phone === '') {
            Alert.alert(undefined, 'Enter your phong number!');
            return;
        }
        savePhone(phone);
        this.props.toggle();
    }

    render() {
        const { container, button, title, input } = styles;
        return (
            <View style={container}>
                <Text style={title}>Enter your phone number</Text>
                <TextInput
                    style={input}
                    value={this.state.phone}
                    placeholder='Phone number'
                    underlineColorAndroid='transparent'
                    onChangeText={text => this.setState({ phone: text })}
                />
                <TouchableOpacity style={button} onPress={this.submit.bind(this)}>
                    <Text>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        padding: 4,
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    title: {
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 24,
        color: 'green'
    },
    input: {
        borderWidth: 1,
        marginVertical: 4,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        padding: 4
    }
});
