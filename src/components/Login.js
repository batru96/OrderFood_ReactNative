import React, { Component } from 'react';
import {
  StyleSheet, Image, Text, View, ImageBackground, TouchableOpacity, 
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'react-native-firebase';
import Buttons from './login/Buttons';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import background from './../images/my_bg.jpg';
import logo from './../images/logo_eat_it.png';

class Login extends Component {
  componentWillMount() {
    setTimeout(() => {
      const { navigation } = this.props;
      firebase.auth().signInAnonymouslyAndRetrieveData()
        .then(data => {
          navigation.navigate({ routeName: 'HOME' });
        })
        .catch(err => console.log(err));
    }, 1000);
  }
  render() {
    const { container } = styles;
    return (
      <ImageBackground style={container} source={background}>
      </ImageBackground>
    );
  }

  showAlert(message) {
    Alert.alert(undefined, message, [
      { text: 'OK' }
    ], { cancelable: false });
  }

  getLayout() {
    const { backgroundCotainer, imageLogo, text } = styles;
    switch (this.state.layout) {
      case 1:
        return (
          <SignIn
            showAlert={this.showAlert.bind(this)}
            navigation={this.props.navigation}
          />
        );
      case 2:
        return <SignUp showAlert={this.showAlert.bind(this)} />;
      default:
        return (
          <View style={backgroundCotainer}>
            <Image source={logo} style={imageLogo} />
            <Text style={text}>No matter what ever you are, weather you are at home, or in the office, or on the beach - we will find you and we will feed you.</Text>
          </View>
        );
    }
  }

  changeLayout(layoutValue) {
    if (this.state.layout !== layoutValue)
      this.setState({
        layout: layoutValue
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: null
  },
  backgroundCotainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageLogo: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  text: {
    color: 'white',
    padding: 60,
    textAlign: 'center',
    fontFamily: 'nabila'
  },
});

export default Login;
