import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, Alert } from 'react-native';
import firebase from 'react-native-firebase';
import SignIn from './login/SignIn';
import SignUp from './login/SignUp';
import background from './../images/my_bg.jpg';
import logo from './../images/logo_eat_it.png';

const aString = `
No matter what ever you are, 
weather you are at home, or in the office, or on the beach - we will find you and we will feed you
`;

class Login extends Component {
  componentDidMount() {
    firebase.auth().signInAnonymouslyAndRetrieveData()
      .then(() => this.props.navigation.navigate({ routeName: 'HOME' }))
      .catch(err => console.log(err));
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
            <Text style={text}>{aString}</Text>
          </View>
        );
    }
  }
  showAlert(message) {
    Alert.alert(undefined, message, [
      { text: 'OK' }
    ], { cancelable: false });
  }

  changeLayout(layoutValue) {
    if (this.state.layout !== layoutValue) {
      this.setState({
        layout: layoutValue
      });
    }
  }

  render() {
    const { container } = styles;
    return (
      <ImageBackground style={container} source={background} />
    );
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
