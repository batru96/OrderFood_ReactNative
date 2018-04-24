import React, { Component } from 'react';
import { View, FlatList, Image } from 'react-native';
import firebase from 'react-native-firebase';
import MenuItem from './menu/MenuItem';
import Header from './product/Header';
import ProductItem from './product/ProductItem';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: []
        };
    }

    componentDidMount() {
        const { id } = this.props.navigation.state.params;
        const categoryRef = firebase.database().ref().child('Category');
        const categoryItemRef = categoryRef.child(id).child('products');
        categoryItemRef.once('value')
            .then(snapshot => {
                const products = [];
                for (key in snapshot.val()) {
                    const product = { ...snapshot.val()[key], id: key };
                    products.push(product);
                }
                this.setState({
                    mang: products
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    navigation={navigation}
                    title={navigation.state.params.title}
                />
                <FlatList
                    data={this.state.mang}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductItem item={item} />}
                />
            </View>
        );
    }
}

export default Products;
