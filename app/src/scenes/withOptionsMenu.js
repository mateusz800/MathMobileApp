import React from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useState } from 'react';
import Menu from '../components/Menu';
import styles from '../components/Menu/styles';
import { colors } from '../constants';
import { OptionsMenu } from '../components/NavigationBar/Options';

const withOptionsMenu = (options, WrappedScene) => {

    return class Scene extends React.Component {
        constructor(props) {
            super(props);
            this.state = { showMenu: false };
            this.toggleMenu = this.toggleMenu.bind(this);
        }

        toggleMenu() {
            console.log("toogle menu");
            this.setState({ showMenu: !this.state.showMenu });
        }



        render() {
            return (
                <View style={{ height: '100%' }}>
                    <WrappedScene {...this.props} toggleOptionsMenu={this.toggleMenu} />
                    {this.state.showMenu &&
                        <View style={{ backgroundColor: 'black', opacity: 0.4, height: '100%', width: '100%', position: 'absolute' }}>
                            <TouchableWithoutFeedback onPress={this.toggleMenu} style={{ width: '100%', height: '100%' }} />
                        </View>
                    }
                   <View style={{position:'absolute', right:0, top:50}}>
                        <OptionsMenu options={options} open={this.state.showMenu} closeMenu={this.toggleMenu} />
                    </View>
                </View>
            );
        }
    }

}
export default withOptionsMenu;