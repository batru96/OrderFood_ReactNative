import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import Header from './cart/Header';
import ButtonPhone from './order/ButtonPhone'
import ListOrder from './order/ListOrder'

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = { isInputOpen: true };
    }

    toggleButtonPhone() {
        this.setState({
            isInputOpen: !this.state.isInputOpen
        })
    }

    render() {
        const { isInputOpen, } = this.state;
        return (
            <View>
                <Header navigation={this.props.navigation} title='Order History' />
                {isInputOpen ? <ButtonPhone toggle={this.toggleButtonPhone.bind(this)} /> : <ListOrder />}
            </View>
        );
    }
}
