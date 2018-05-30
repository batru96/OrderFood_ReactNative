import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from './cart/Header';
import ButtonPhone from './order/ButtonPhone';

class Setting extends Component {
    render() {
        const { navigation } = this.props;
        const { container } = styles;
        return (
            <View style={container}>
                <Header navigation={navigation} title="Setting" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Setting;
