import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
class MenuItem extends Component {
    render() {
        const { container, image, text } = styles;
        const { item } = this.props;
        return (
            <TouchableOpacity style={container} onPress={this.onPress.bind(this)}>
                <Image source={{ uri: item.image }} style={image} />
                <Text style={text}>{item.name}</Text>
            </TouchableOpacity>
        );
    }
    onPress() {
        const { item, navigation } = this.props;
        navigation.navigate('PRODUCTS', {
            id: item.id,
            title: item.name
        });
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 7,
        marginVertical: 8,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: 'lightgray',
        borderRadius: 5
    },
    image: {
        width: width - 16,
        height: (width - 16) * 588 / 1118
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
    },
});

export default MenuItem;
