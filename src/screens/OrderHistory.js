import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../components/cart/Header';
import ListOrder from '../components/order/ListOrder';
import Footer from '../components/order/Footer';
import { SHOW_ALL } from '../global';

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateScreen: SHOW_ALL
        };
    }

    replaceState(newState) {
        if (newState !== this.state.stateScreen) {
            this.setState({
                stateScreen: newState
            });
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header navigation={this.props.navigation} title='Order History' />
                <ListOrder showState={this.state.stateScreen} />
                <Footer replaceState={this.replaceState.bind(this)} />
            </View>
        );
    }
}
