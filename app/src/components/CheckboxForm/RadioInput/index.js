import React from 'react';
import {View} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import styles from './styles';

const RadioButton = ({active}) => {
    return (
        <View style={[styles.container, active && styles.active]}/>

    );
};

export default RadioButton;