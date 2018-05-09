import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, Image, Alert
} from 'react-native';
import firebase from 'react-native-firebase';
import icIcon from '../icons/ic_menu.png';


class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [{ id: '1', name: 'Menu' }, { id: '2', name: 'Cart' },
            { id: '3', name: 'Ordered' }, { id: '4', name: 'Signout' }]
        };
    }

    render() {
        const { container, button, text, image } = styles;
        return (
            <View style={container}>
                {this.state.mang.map(item => {
                    return (
                        <TouchableOpacity onPress={() => this.onItemPress(item.name)} key={item.id} style={button}>
                            <Image style={image} source={icIcon} />
                            <Text style={text}>{item.name}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    onItemPress(name) {
        const { navigation } = this.props;
        switch (name) {
            case 'Menu':
                if (navigation.state.index === 0) navigation.navigate('DrawerToggle');
                else navigation.navigate({ routeName: 'MENU' });
                break;
            case 'Cart':
                navigation.navigate({ routeName: 'CART' });
                break;
            case 'Ordered':
                const { phoneNumber } = firebase.auth().currentUser._user;
                navigation.navigate({ routeName: 'ORDER_HISTORY' });
                break;
            case 'Signout':
                navigation.navigate({ routeName: 'SIGN_IN' });
                break;
            default:
                navigation.navigate('DrawerClose');
                break;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#494948',
        justifyContent: 'center'
    },
    button: {
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 2,
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 16
    },
    text: {
        color: 'white'
    }
});

export default Drawer;
