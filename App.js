import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainStack from './src/Router';
import store from '././src/redux/Store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MainStack />
            </Provider>
        );
    }
}
