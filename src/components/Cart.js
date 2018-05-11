import React, { Component } from 'react';
import {
    View, Text, FlatList, TouchableOpacity, StyleSheet, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import CartItem from './cart/CartItem';
import Header from './cart/Header';
import Footer from './cart/Footer';

class Cart extends Component {
    getTotalPrice() {
        let totalPrice = 0;
        this.props.mang.forEach(item => {
            const price = item.price.replace(/[^0-9]/g, '');
            totalPrice += (price * item.num);
        });
        return `$${totalPrice}`;
    }
    checkOut() {
        const { mang, dispatch } = this.props;
        if (mang.length === 0) {
            Alert.alert(undefined, 'Empty cart');
            return;
        }
        dispatch({ type: 'TOGGLE INPUT' });
    }

    render() {
        const { button, buttonText } = styles;
        const { isInputVisible, navigation, mang } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Header navigation={navigation} title='Cart' />
                <FlatList
                    style={{ paddingHorizontal: 4 }}
                    data={mang}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <CartItem item={item} />}
                />
                <TouchableOpacity
                    style={button}
                    onPress={this.checkOut.bind(this)}
                >
                    <Text style={buttonText}>
                        Total: {this.getTotalPrice()}{isInputVisible ? ' || Hide' : ''}
                    </Text>
                </TouchableOpacity>
                {isInputVisible ?
                    <Footer totalPrice={this.getTotalPrice()} /> : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#009c88',
        padding: 8,
        marginVertical: 4,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
});

function mapStateToProps(state) {
    return {
        mang: state.cartArray,
        isInputVisible: state.isInputVisible,
    };
}

export default connect(mapStateToProps)(Cart);
