import React from 'react';
import { useState } from 'react';
import { View, Image, Text, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import logo from '../../assets/images/logo.png';
import LoginForm from '../../components/forms/LoginForm';
import styles from './styles';

const Type = {
    LOGIN: 1,
    REGISTER: 2
}

const LoginScene = ({ route, navigation }) => {
    const [type, setType] = useState(Type.LOGIN)

    const navigateToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.appName}>Nazwa aplikacji</Text>
            <Text style={styles.appDesc}>Aplikacja do nauki matematyki</Text>
            {type == Type.LOGIN && <LoginForm  changeToRegisterFunc={null} navigateToHome={navigateToHome}/>}
        </View>
    );
};

export default LoginScene;