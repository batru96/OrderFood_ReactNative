import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import icMenu from '../../icons/ic_menu.png';
import icSearch from '../../icons/ic_search.png';

class Header extends Component {
    render() {
        const { container, icon, title } = styles;
        return (
            <View style={container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerToggle')}>
                    <Image style={icon} source={icMenu} />
                </TouchableOpacity>
                <Text style={title}>Menu</Text>
                <TouchableOpacity>
                    <Image style={icon} source={icSearch} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: '#164845',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'nabila'
    },
    icon: {
        width: 30,
        height: 30
    }
});

export default Header;
