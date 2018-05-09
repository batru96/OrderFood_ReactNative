import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    render() {
        const { container, input, button, btnText } = styles;
        const { phone, address } = this.state;
        return (
            <View style={container}>
                <TextInput
                    style={input}
                    placeholder='Enter your address'
                    underlineColorAndroid='transparent'
                    value={address}
                    onChangeText={value => this.setState({ address: value })}
                />
                <TouchableOpacity style={button} onPress={this.submit.bind(this)}>
                    <Text style={btnText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        );
    }

    submit() {
        const { address } = this.state;
        const { cartArray, totalPrice } = this.props;
        const phone = firebase.auth().currentUser._user.phoneNumber;
        if (address === '') {
            Alert.alert(undefined, 'Enter your address!');
            return;
        }
        if (phone == null) {
            Alert.alert(undefined, 'Please provide your phone number');
            return;
        }

        const value = { phone, address, cartArray, status: 0, totalPrice };
        const orderedRef = firebase.database().ref().child('Ordered');
        orderedRef.push().set(value, (err) => {
            if (err) {
                console.log(err);
                return;
            }
            Alert.alert(undefined, 'Order success', undefined, { cancelable: false });
            this.setState({ address: '' });
            this.props.dispatch({
                type: 'TOGGLE INPUT'
            });
            this.props.dispatch({
                type: 'CLEAR_CART'
            });
        });
    }
}

const styles = StyleSheet.create({
    container: {
    },
    input: {
        borderWidth: 1,
        height: 40,
        margin: 4,
        paddingHorizontal: 16
    },
    button: {
        margin: 4,
        padding: 8,
        backgroundColor: '#436ab8',
        alignItems: 'center'
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

function mapStateToProps(state) {
    return { cartArray: state.cartArray };
}

export default connect(mapStateToProps)(Footer);
