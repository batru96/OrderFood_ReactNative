import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import Header from './cart/Header';
import OrderHistoryItem from './order/OrderHistoryItem';
import getPhone from '../api/getPhoneNumber';

class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: []
        };

    }

    componentDidMount() {
        getPhone().then(phone => {
            const orderedRef = firebase.database().ref('Ordered');
            orderedRef.orderByChild('phone').equalTo(phone).once('value')
                .then(snapshot => {
                    const mang = [];
                    snapshot.forEach(item => {
                        const { status, address, totalPrice } = item.val();
                        mang.push({ id: item.key, status, address, phone: item.val().phone, totalPrice });
                    });
                    this.setState({ mang });
                })
        });
    }

    render() {
        return (
            <View>
                <Header navigation={this.props.navigation} title='Order History' />
                <FlatList
                    data={this.state.mang}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <OrderHistoryItem item={item} />}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    return { phone: state.phone };
}

export default connect(mapStateToProps)(OrderHistory);