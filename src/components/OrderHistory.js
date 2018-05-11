import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './cart/Header';
import ButtonPhone from './order/ButtonPhone';
import ListOrder from './order/ListOrder';
import getPhone from '../api/getPhoneNumber';

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInputOpen: false
        };
    }

    componentDidMount() {
        getPhone()
        .then(phone => {
            if (phone == null) this.setState({ isInputOpen: true });
        })
        .catch(error => console.log(error));
    }

    toggleButtonPhone() {
        this.setState({
            isInputOpen: !this.state.isInputOpen
        });
    }

    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} title='Order History' />
                {this.state.isInputOpen ?
                    <ButtonPhone toggle={this.toggleButtonPhone.bind(this)} /> : <ListOrder />}
            </View>
        );
    }
}
