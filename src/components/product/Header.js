import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import icBack from '../../icons/ic_back.png';

class Header extends Component {
    render() {
        const { container, icon, title } = styles;
        return (
            <View style={container}>
                <TouchableOpacity onPress={this.goBack.bind(this)}>
                    <Image style={icon} source={icBack} />
                </TouchableOpacity>
                <Text style={title}>{this.props.title}</Text>
                <View style={icon}/>
            </View>
        );
    }
    
    goBack() {
        const { navigation } = this.props;
        if (navigation) navigation.goBack();
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
    },
});

export default connect()(Header);
