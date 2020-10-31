import React from 'react';
import { View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './styles'

/**
 * Hamburger button 
 */
const HamburgerBtn = ({click}) => {
    
    return (
        <TouchableWithoutFeedback style={styles.container} onPress={click}>
            <View style={styles.line}/>
            <View style={styles.line}/>
            <View style={styles.line}/>
        </TouchableWithoutFeedback>
    );
};

export default HamburgerBtn;