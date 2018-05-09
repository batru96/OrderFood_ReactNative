import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import firebase from 'react-native-firebase'
import OrderHistoryItem from '.././order/OrderHistoryItem';


export default class ListOrder extends Component {
    constructor(props) {
        super(props)
        this.state = { mang: [] }
    }

    componentDidMount() {
        const phone = firebase.auth().currentUser._user.phoneNumber
        if (phone == null) return
        const orderedRef = firebase.database().ref().child('Ordered');

        orderedRef.orderByChild('phone').equalTo(phone).once('value')
            .then(snapshot => {
                const mang = [];
                snapshot.forEach(item => {
                    const { status, address, totalPrice } = item.val();
                    mang.push({ id: item.key, status, address, phone: item.val().phone, totalPrice });
                });
                this.setState({ mang });
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <FlatList
                data={this.state.mang}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <OrderHistoryItem item={item} />}
            />
        )
    }
}
