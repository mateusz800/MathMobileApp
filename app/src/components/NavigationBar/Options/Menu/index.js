import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import styles from './styles';

const Menu = ({ open, options, closeMenu }) => {
    if (!open) {
        return null;
    }
    const optionsList = options.map(option =>
        <TouchableWithoutFeedback onPressOut={() => { option.function(); closeMenu(); }} key={option.text}>
            <Text >{option.text}</Text>
        </TouchableWithoutFeedback>
    );
    return (
        <View style={styles.container}>
            {optionsList}
        </View>
    );
};

export default Menu;