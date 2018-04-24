import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, Alert
} from 'react-native';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
class CartItem extends Component {
    render() {
        const {
            container, image, infoContainer, btnsContainer, updateButton,
            btnText, priceText, nameText, updateButtonText
        } = styles;
        const { name, price, num } = this.props.item;
        return (
            <View style={container}>
                <Image source={{ uri: this.props.item.img }} style={image} />
                <View style={infoContainer}>
                    <Text style={nameText}>{name.toUpperCase()}</Text>
                    <Text style={priceText}>Price: {price}</Text>
                </View>
                <View style={btnsContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.minusNumber.bind(this)}>
                            <Text style={btnText}>-</Text>
                        </TouchableOpacity>
                        <Text style={btnText}>{num}</Text>
                        <TouchableOpacity onPress={this.plusNumber.bind(this)}>
                            <Text style={btnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={updateButton} onPress={this.removeItem.bind(this)}>
                            <Text style={updateButtonText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
    minusNumber() {
        const { id, num } = this.props.item;
        if (num === 1) return;
        this.props.dispatch({
            type: 'UPDATE_PRODUCT_NUMBER',
            id,
            num: num - 1
        });
    }

    plusNumber() {
        const { id, num } = this.props.item;
        if (num === 10) return;
        this.props.dispatch({
            type: 'UPDATE_PRODUCT_NUMBER',
            id,
            num: num + 1
        });
    }

    removeItem() {
        const { dispatch, item } = this.props;
        Alert.alert('Remove it?', 'Are you sure', [
            {
                text: 'YES',
                onPress: () => dispatch({
                    type: 'REMOVE_PRODUCT_FROM_CART',
                    id: item.id
                })
            },
            { text: 'NO' }
        ], { cancelable: false });
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 4,
        backgroundColor: '#164845',
        flexDirection: 'row',
        padding: 4
    },
    image: {
        width: 100,
        height: 100 * 333 / 500
    },
    infoContainer: {
        paddingHorizontal: 8,
        justifyContent: 'space-around',
        flex: 1
    },
    btnsContainer: {
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    updateButton: {
        flex: 1,
        borderColor: 'white',
        borderWidth: 1,
        padding: 4,
        marginHorizontal: 4,
        alignItems: 'center'
    },
    updateButtonText: {
        color: 'white',
    },
    btnText: {
        color: 'white',
        paddingHorizontal: 4,
        borderWidth: 1,
        marginHorizontal: 4,
        borderColor: 'white',
        width: 26,
        textAlign: 'center'
    },
    priceText: {
        color: 'white',
        fontSize: 16
    },
    nameText: {
        color: 'white',
    }
});

export default connect()(CartItem);
