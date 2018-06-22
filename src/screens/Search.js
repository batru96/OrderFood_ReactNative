import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import Header from '../components/product/Header';
import ProductItem from '../components/product/ProductItem';

export default class Search extends Component {
    render() {
        const { title, mang } = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    navigation={this.props.navigation}
                    title={title}
                />
                <FlatList
                    data={mang}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <ProductItem item={item} />}
                />
            </View>
        );
    }
}
