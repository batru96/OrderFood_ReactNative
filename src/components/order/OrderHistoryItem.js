import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class OrderHistoryItem extends Component {
    getStatus() {
        switch (this.props.item.status) {
            case 1: return 'SENDING';
            case 2: return 'RECEIVED';
            default: return 'CHECKING';
        }
    }
    render() {
        const { container } = styles;
        const { id, phone, address, totalPrice } = this.props.item;
        return (
            <View style={container}>
                <Text>ID: {id}</Text>
                <Text>Status: {this.getStatus()}</Text>
                <Text>Address: {address}</Text>
                <Text>Phone: {phone}</Text>
                <Text>Total price: {totalPrice}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 8,
        paddingVertical: 4,
        margin: 8,
    }
});

export default OrderHistoryItem;
