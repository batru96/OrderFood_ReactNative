import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import icMenu from '../../icons/ic_menu.png';
import icSearch from '../../icons/ic_search.png';
import styles from './styles';

export default class NormalHeader extends Component {
    render() {
        const { container, icon, title } = styles;
        const { navigate } = this.props.navigation;    
        return (
            <View style={container}>
                <TouchableOpacity onPress={() => navigate('DrawerToggle')}>
                    <Image style={icon} source={icMenu} />
                </TouchableOpacity>
                <Text style={title}>Menu</Text>
                <TouchableOpacity onPress={() => this.props.toggle()}>
                    <Image style={icon} source={icSearch} />
                </TouchableOpacity>
            </View>
        );
    }
}
