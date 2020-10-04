import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import HamburgerBtn from './HamburgerButton'
import styles from './styles'

/**
 *  Available types of the bar
 */
export const barType = {
    DEFAULT: 0,
    DETAILS: 1
}


/**
 * Bar displayed on top of the screen
 */
const NavigationBar = ({ title, type }) => {
    return (
        <View style={styles.container}>
            {type == barType.DEFAULT && <HamburgerBtn/>}
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
};


NavigationBar.defaultProps = {
    type: barType.DEFAULT
};

NavigationBar.propTypes = {
    // the text displayed on the bar
    title: PropTypes.string,
    // type of the page in which the bar is visible
    type: PropTypes.oneOf(Object.values(barType))
};



export default NavigationBar;