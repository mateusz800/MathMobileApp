import React from 'react';
import {View} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './styles'

const Button = ({onPress}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress} style={styles.container}>
            <View style={styles.dot}/>
            <View style={styles.dot}/>
            <View style={styles.dot}/>
        </TouchableWithoutFeedback>
    );
};

export default Button;