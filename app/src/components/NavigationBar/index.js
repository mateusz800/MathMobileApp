import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import HamburgerBtn from './HamburgerButton';
import { OptionsBtn, OptionsMenu } from './Options'
import BackBtn from './BackButton';
import Progress from './Progress';
import styles from './styles';


/**
 *  Available types of the bar
 */
export const barType = {
    DEFAULT: 0,
    DETAILS: 1,
    LESSON: 2
}


/**
 * Bar displayed on top of the screen
 */
// TODO: smash type to props e.g progress, title etc.
const NavigationBar = ({ title, type, progress, maxProgress, navigation, toogleMenu, toggleOptionsMenu }) => {
    const goBack = () => {
        navigation.pop();
    }
    return (
        <View style={styles.container}>
            <View style={styles.leftButton}>
                {type == barType.DEFAULT && <HamburgerBtn click={toogleMenu} />}
                {type != barType.DEFAULT && <BackBtn goBack={goBack} />}
            </View>
            <View style={styles.content}>
                {type == barType.DETAILS && title && <Text style={styles.title}>{title.toUpperCase()}</Text>}
                {type == barType.LESSON && <Progress value={progress} max={maxProgress} />}
                <View style={styles.right}>
                    {toggleOptionsMenu && <OptionsBtn onPress={toggleOptionsMenu} />}
                </View>
            </View>
        </View>
    );
};


NavigationBar.defaultProps = {
    type: barType.DEFAULT,
};

NavigationBar.propTypes = {
    // the text displayed on the bar
    title: PropTypes.string,
    // type of the page in which the bar is visible
    type: PropTypes.oneOf(Object.values(barType))
};



export default NavigationBar;