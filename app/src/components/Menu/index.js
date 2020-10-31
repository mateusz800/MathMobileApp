import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Menu = ({show}) => {
    if(!show){
        return null;
    }
    return (
        <View style={styles.container}>
            <Text>Menu</Text>
        </View>
    );
};

export default Menu;