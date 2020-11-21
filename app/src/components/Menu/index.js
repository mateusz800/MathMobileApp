import React from 'react';
import { View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { logout } from '../../data/auth';

import styles from './styles';

const Menu = ({ show, navigation }) => {
    if (!show) {
        return null;
    }
    const logoutOperation = () => {
        logout().then(()=> {
            navigation.navigate('Login');
        });
        
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={logoutOperation}>
                <Text style={styles.logoutBtn}>Wyloguj się</Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default Menu;