import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import icIcon from '../icons/ic_menu.png';
import icSettings from '../icons/ic_settings.png';
import icCart from '../icons/ic_cart.png';
import icHome from '../icons/ic_home.png';
import icOrdered from '../icons/ic_book.png';
import icSignOut from '../icons/ic_lock.png';
import imgDrawer from '../images/drawer.jpg';

const { width } = Dimensions.get('window');
class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [
                { id: '1', name: 'Home', img: icHome },
                { id: '2', name: 'Cart', img: icCart },
                { id: '3', name: 'Ordered', img: icOrdered },
                { id: '5', name: 'Setting', img: icSettings },
                { id: '4', name: 'Sign out', img: icSignOut }
            ],
        };
    }

    onItemPress(name) {
        const { navigation } = this.props;
        switch (name) {
            case 'Home':
                if (navigation.state.index === 0) navigation.navigate('DrawerToggle');
                else navigation.navigate({ routeName: 'MENU' });
                break;
            case 'Cart':
                navigation.navigate({ routeName: 'CART' });
                break;
            case 'Signout':
                navigation.navigate({ routeName: 'SIGN_IN' });
                break;
            case 'Ordered':
                navigation.navigate({ routeName: 'ORDER_HISTORY' });
                break;
            case 'Setting':
                navigation.navigate('SETTING');
                break;
            default:
                navigation.navigate('DrawerClose');
                break;
        }
    }

    render() {
        const { container, button, text, image, imageDrawer } = styles;
        return (
            <View style={container}>
                <Image
                    style={imageDrawer}
                    source={imgDrawer}
                />
                {this.state.mang.map(item => (
                    <TouchableOpacity
                        onPress={() => this.onItemPress(item.name)}
                        key={item.id}
                        style={button}
                    >
                        <Image style={image} source={item.img ? item.img : icIcon} />
                        <Text style={text}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#494948',
        // justifyContent: 'center'
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
    },
    imageDrawer: {
        width: width * 0.7,
        height: (width * 0.7) * (375 / 500),
        marginBottom: 16
    }
});

export default Drawer;
