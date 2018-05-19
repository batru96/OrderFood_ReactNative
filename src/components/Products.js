import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import firebase from 'react-native-firebase';
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
                // Push all keys into an array named "keys"
                const keys = Object.keys(snapshot.val());
                const products = keys.map(key => ({ ...snapshot.val()[key], id: key }));
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
