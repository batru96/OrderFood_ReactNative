import React, { Component } from 'react';
import {
    View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Alert
} from 'react-native';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
class ProductItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        };
    }

    render() {
        const {
            container, image, text, descriptionText, imageContainer, btnsContainer,
            btnText, orderText
        } = styles;
        const { name, description, price } = this.props.item;
        return (
            <View style={container}>
                <Text style={text}>{name.toUpperCase()}</Text>
                <Text style={descriptionText}>{description}</Text>
                <Text style={descriptionText}>Price: {price}</Text>
                <View style={imageContainer}>
                    <Image source={{ uri: this.props.item.image }} style={image} />
                </View>
                <View style={btnsContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={this.minusNumber.bind(this)}>
                            <Text style={btnText}>-</Text>
                        </TouchableOpacity>
                        <Text style={btnText}>{this.state.num}</Text>
                        <TouchableOpacity onPress={this.plusNumber.bind(this)}>
                            <Text style={btnText}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.order.bind(this)}>
                        <Text style={orderText}>Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    minusNumber() {
        if (this.state.num === 1) return;
        this.setState({
            num: this.state.num - 1
        });
    }

    plusNumber() {
        if (this.state.num === 10) return;
        this.setState({
            num: this.state.num + 1
        });
    }

    isExist(mang, id) {
        for (let i = 0; i < mang.length; i++) {
            if (mang[i].id === id) return true;
        }
        return false;
    }

    order() {
        const { id, price, name, image } = this.props.item;
        if (!this.isExist(this.props.cartArray, id)) {
            this.props.dispatch({
                type: 'ADD_PRODUCT_TO_CART',
                product: {
                    id,
                    name,
                    num: this.state.num,
                    img: image,
                    price
                }
            });
        } else {
            Alert.alert(undefined, 'Cannot add to cart beacause it\'s already exists!')
        }
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 4,
        marginVertical: 8,
        borderRadius: 4,
        paddingVertical: 8,
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    imageContainer: {
        marginTop: 4,
        alignItems: 'center',
    },
    image: {
        width: width - 16,
        height: (width - 16) * 588 / 1118,
        borderRadius: 4,
    },
    text: {
        marginHorizontal: 2,
        fontSize: 16
    },
    descriptionText: {
        marginHorizontal: 2
    },
    btnsContainer: {
        flexDirection: 'row',
        backgroundColor: '#31756c',
        paddingVertical: 4,
        marginHorizontal: 2,
        marginTop: 4,
        borderRadius: 4,
        justifyContent: 'space-between'
    },
    btnText: {
        color: 'white',
        paddingHorizontal: 4,
        borderWidth: 1,
        marginHorizontal: 4,
        borderColor: 'white',
        width: 32,
        textAlign: 'center'
    },
    orderText: {
        color: 'white',
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: 'white',
        marginRight: 4,
    }
});

function mapStateToProps(state) {
    return { cartArray: state.cartArray };
}
export default connect(mapStateToProps)(ProductItem);
