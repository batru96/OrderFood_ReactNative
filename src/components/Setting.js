import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './cart/Header';
import ButtonPhone from './order/ButtonPhone';

class Setting extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Header navigation={navigation} title="Setting" />
                <ButtonPhone />
            </View>
        );
    }
}

export default Setting;
