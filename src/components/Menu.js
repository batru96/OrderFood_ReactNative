import React, { Component } from 'react';
import {
    View, Text, StyleSheet, FlatList, Image, TouchableOpacity, BackHandler
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import MenuItem from './menu/MenuItem';
import Header from './menu/Header';
import getCart from '../api/GetCart';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { mang: [] };
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => true);
        const categoryRef = firebase.database().ref('Category');
        categoryRef.once('value')
            .then(snapshot => {
                const menus = [];
                snapshot.forEach(item => {
                    const { name, image } = item.val();
                    menus.push({ id: item.key, name, image });
                });
                this.setState({ mang: menus });
            })
            .catch(err => console.log(err));
        getCart()
            .then(cartArray => this.props.dispatch({
                type: 'REPLACE_CART',
                cart: cartArray
            }));
    }

    render() {
        const { container } = styles;
        const { navigation } = this.props;
        return (
            <View style={container}>
                <Header navigation={navigation} />
                <FlatList
                    data={this.state.mang}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <MenuItem item={item} navigation={navigation} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});


export default connect()(Menu);
