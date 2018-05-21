import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

export default class SearchHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    render() {
        const { input, searchBarContainer } = styles;
        return (
            <View style={searchBarContainer}>
                <TextInput
                    style={input}
                    value={this.state.searchTerm}
                    placeholder="Chicken"
                    placeholderTextColor="lightgray"
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ searchTerm: text })}
                />
            </View>
        );
    }
}
