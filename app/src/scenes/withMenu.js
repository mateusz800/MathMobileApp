import React from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useState } from 'react';
import Menu from '../components/Menu';
import styles from '../components/Menu/styles';
import { colors } from '../constants';

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
                <View style={{ height: '100%' }}>
                    <WrappedScene {...this.props} toogleMenu={this.toogleMenu} />
                    {this.state.showMenu &&
                        <View style={{ backgroundColor: 'black', opacity: 0.4, height: '100%', width: '100%', position: 'absolute' }}>
                            <TouchableWithoutFeedback onPress={this.toogleMenu} style={{ width: '100%', height: '100%'}} />
                        </View>
                    }
                    <Menu show={this.state.showMenu} navigation={this.props.navigation} />
                </View>
            );
        }
    }

}
export default withMenu;