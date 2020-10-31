import React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import Menu from '../components/Menu';

const withMenu = (WrappedScene) => {
    return class Scene extends React.Component {
        constructor(props) {
            super(props);
            this.state = { showMenu: false };
            this.toogleMenu = this.toogleMenu.bind(this);
        }

        toogleMenu() {
            this.setState({ showMenu: !this.state.showMenu });
        }
        render() {
            return (
                <View style={{height:'100%'}}>
                    <WrappedScene {...this.props} toogleMenu={this.toogleMenu} />
                    <Menu show={this.state.showMenu}/>
                </View>
            );
        }
    }

}
export default withMenu;