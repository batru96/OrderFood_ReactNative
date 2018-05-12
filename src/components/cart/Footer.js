import React, { Component } from 'react';
import {
    View, Text, TextInput, StyleSheet, TouchableOpacity, Alert
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import getPhone from '../../api/getPhoneNumber';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            isShowPhoneInput: false,
            phone: null
        };
    }

    componentDidMount() {
        getPhone()
            .then(phone => {
                if (phone == null) {
                    Alert.alert('Please provide your phone number');
                    this.setState({
                        isShowPhoneInput: true,
                    });
                } else {
                    this.setState({ phone });
                }
            })
            .catch(error => console.log(error));
    }

    submit() {
        const { address, phone } = this.state;
        const { cartArray, totalPrice } = this.props;
        if (address === '') {
            Alert.alert(undefined, 'Enter your address!');
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
            this.props.toggle();
            this.props.dispatch({
                type: 'CLEAR_CART'
            });
        });
    }

    render() {
        const { container, input, button, btnText } = styles;
        const { phone, address, isShowPhoneInput } = this.state;
        return (
            <View style={container}>
                <TextInput
                    style={input}
                    placeholder='Enter your address'
                    underlineColorAndroid='transparent'
                    value={address}
                    onChangeText={value => this.setState({ address: value })}
                />
                {
                    isShowPhoneInput ?
                        <TextInput
                            style={input}
                            placeholder='Enter your phone'
                            underlineColorAndroid='transparent'
                            value={phone}
                            onChangeText={value => this.setState({ phone: value })}
                        /> : null
                }
                <TouchableOpacity style={button} onPress={this.submit.bind(this)}>
                    <Text style={btnText}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        );
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
