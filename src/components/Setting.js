import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './cart/Header';

class Setting extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Header navigation={navigation} title="Setting" />
                <Text>SETTING PAGE</Text>
            </View>
        );
    }
}

export default Setting;
