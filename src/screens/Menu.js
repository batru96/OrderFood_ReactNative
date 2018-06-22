import React, { Component } from 'react';
import { View, FlatList, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import MenuItem from '../components/menu/MenuItem';
import Header from '../components/menu/Header';
import getCart from '../api/GetCart';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { mang: [] };
        this.mounted = true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => true);
        this.categoryRef = firebase.database().ref('Category');
        this.categoryRef.once('value')
            .then(snapshot => {
                // Push all keys into an array
                const keys = Object.keys(snapshot.val());
                const menus = keys.map(key => {
                    const { name, image } = snapshot.val()[key];
                    return { id: key, name, image };
                });
                if (this.mounted === true) this.setState({ mang: menus });
            })
            .catch(err => console.log(err));

        getCart()
            .then(cartArray => this.props.dispatch({
                type: 'REPLACE_CART',
                cart: cartArray
            }));
    }

    componentWillUnmount() {
        this.mounted = false;
        this.categoryRef.off('value');
    }

    updateMang(newMang) {
        this.setState({
            mang: newMang
        });
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header navigation={navigation} />
                <FlatList
                    data={this.state.mang}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <MenuItem item={item} navigation={navigation} />}
                />
            </View>
        );
    }
}

export default connect()(Menu);
