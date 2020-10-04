import React from 'react';
import { View } from 'react-native';

import styles from './styles'

/**
 * Hamburger button 
 */
const HamburgerBtn = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line}/>
            <View style={styles.line}/>
            <View style={styles.line}/>
        </View>
    );
};

export default HamburgerBtn;