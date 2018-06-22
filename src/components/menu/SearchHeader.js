import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import styles from './styles';

class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    search() {
        const searchTerm = this.state.searchTerm.toLowerCase();
        const { navigation } = this.props;
        firebase.database().ref('Category')
            .once('value')
            .then(snapshot => {
                const mang = [];
                const keys = Object.keys(snapshot.val());
                keys.forEach(key => {
                    const products = snapshot.val()[key].products;
                    const productKeys = Object.keys(products);
                    productKeys.forEach(item => {
                        const foodName = products[item].name;
                        if (foodName.toLowerCase().includes(searchTerm)) {
                            mang.push({
                                id: item,
                                ...products[item]
                            });
                        }
                    });
                });
                navigation.navigate('SEARCH', { mang, title: 'Search' });
            })
            .catch(error => console.log(error));
    }

    render() {
        const { input, searchBarContainer } = styles;
        return (
            <View style={searchBarContainer}>
                <TextInput
                    style={input}
                    value={this.state.searchTerm}
                    placeholder='Search...'
                    placeholderTextColor="lightgray"
                    underlineColorAndroid="transparent"
                    onSubmitEditing={this.search.bind(this)}
                    onChangeText={text => this.setState({ searchTerm: text })}
                />
            </View>
        );
    }
}

export default connect()(SearchHeader);
