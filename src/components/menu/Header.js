import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import icMenu from '../../icons/ic_menu.png';
import icSetting from '../../icons/ic_setting.png';

class Header extends Component {
    onSetting() {
        this.props.navigation.navigate('SETTING');
    }

    render() {
        const { container, icon, title } = styles;
        return (
            <View style={container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerToggle')}>
                    <Image style={icon} source={icMenu} />
                </TouchableOpacity>
                <Text style={title}>Menu</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SETTING')}>
                    <Image style={icon} source={icSetting} />
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
