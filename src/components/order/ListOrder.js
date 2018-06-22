import React, { Component } from 'react';
import { FlatList } from 'react-native';
import firebase from 'react-native-firebase';
import OrderHistoryItem from '.././order/OrderHistoryItem';
import getPhone from '../../api/getPhoneNumber';
import { SHOW_ALL, SENDING, RECEIVED } from '../../global';

export default class ListOrder extends Component {
    constructor(props) {
        super(props);
        this.state = { mang: [] };
    }

    // Call only one time
    componentDidMount() {
        const { showState } = this.props;
        getPhone()
        .then(phone => {
            if (phone == null) return; 
            const orderedRef = firebase.database().ref().child('Ordered');
    
            orderedRef.orderByChild('phone').equalTo(phone).once('value')
            .then(snapshot => {
                this.mang = [];
                this.mang2 = [];
                this.mang3 = [];

                snapshot.forEach(item => {
                    const { status, address, totalPrice } = item.val();
                    this.mang.unshift({ 
                        id: item.key, 
                        status, 
                        address, 
                        phone: item.val().phone, 
                        totalPrice 
                    });
                    if (status === 1) {
                        this.mang2.unshift({ 
                            id: item.key, 
                            status, 
                            address, 
                            phone: item.val().phone, 
                            totalPrice 
                        });
                    } else if (status === 2) {
                        this.mang3.unshift({ 
                            id: item.key, 
                            status, 
                            address, 
                            phone: item.val().phone, 
                            totalPrice 
                        });
                    }
                });
                this.setMang(showState);
            })
            .catch(error => console.log(error));
        })
        .catch(error => console.log(error));
    }

    // This function will be call anytime the user press item in the footer.
    componentWillReceiveProps(nextProps) {
        this.setMang(nextProps.showState);
    }

    // This function help loading list faster, because we have to load information from
    // internet once time
    setMang(showState) {
        if (showState === SHOW_ALL) {
            this.setState({
                mang: this.mang
            });
        } else if (showState === SENDING) {
            this.setState({
                mang: this.mang2
            });
        } else if (showState === RECEIVED) {
            this.setState({
                mang: this.mang3
            });
        }
    }


    render() {
        return (
            <FlatList
                data={this.state.mang}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <OrderHistoryItem item={item} />}
            />
        );
    }
}
