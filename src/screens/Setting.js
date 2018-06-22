import React, { Component } from 'react';
import { 
    View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, Alert 
} from 'react-native';
import Header from '../components/cart/Header';
import getPhone from '../api/getPhoneNumber';
import savePhone from '../api/savePhoneNumber';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = { phone: '' };
    }

    componentDidMount() {
        getPhone()
        .then(phone => {
            if (phone) this.setState({ phone });
        })
        .catch(error => console.log(error));
    }

    savePhoneNumber() {
        savePhone(this.state.phone)
        .then(() => Alert.alert('Alert', 'Saved'))
        .catch(error => console.log(error));
    }

    render() {
        const { navigation } = this.props;
        const { container, input, button, buttonText, textSuggestion } = styles;
        return (
            <View style={container}>
                <Header navigation={navigation} title='Setting' />
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={textSuggestion}>Please enter your phone number</Text>
                    <TextInput
                        style={input}
                        placeholder='0123123123'
                        placeholderTextColor='lightgray'
                        value={this.state.phone}
                        keyboardType='phone-pad'
                        underlineColorAndroid='transparent'
                        onChangeText={text => this.setState({ phone: text })}
                    />
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={button} onPress={this.savePhoneNumber.bind(this)}>
                            <Text style={buttonText}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
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
    textSuggestion: {
        textAlign: 'center',
        fontSize: 20
    },
    input: {
        height: 40,
        borderWidth: 2,
        borderColor: 'blue',
        paddingHorizontal: 8,
        color: 'gray',
        marginHorizontal: 4,
        marginVertical: 16,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: width / 2,
        borderColor: 'blue',
        borderWidth: 2
    },
    buttonText: {
        color: 'black'
    }
});

export default Setting;
