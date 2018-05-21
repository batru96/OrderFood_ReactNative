import React, { Component } from 'react';
import NormalHeader from './NormalHeader';
import SearchHeader from './SearchHeader';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRenderSearch: false
        };
    }

    toggleSearchBar() {
        this.setState({
            isRenderSearch: !this.state.isRenderSearch
        });
    }

    render() {
        const { navigation } = this.props;
        return this.state.isRenderSearch ?
            <SearchHeader
                navigation={navigation}
                toggle={this.toggleSearchBar.bind(this)}
            /> :
            <NormalHeader
                navigation={navigation}
                toggle={this.toggleSearchBar.bind(this)}
            />;
    }
}

export default Header;
