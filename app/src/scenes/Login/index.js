import React from 'react';
import { useState } from 'react';
import { View, Image, Text, AppState } from 'react-native';

import LoginForm from '../../components/forms/LoginForm';
import RegisterForm from '../../components/forms/RegisterForm';
import logo from '../../assets/images/logo.png';
import styles from './styles';

const Type = {
    LOGIN: 1,
    REGISTER: 2
}

const LoginScene = ({ route, navigation }) => {
    // TODO: navigate to home if user is logged
    const [type, setType] = useState(Type.LOGIN)
    const navigateToHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.appName}>Nazwa aplikacji</Text>
            <Text style={styles.appDesc}>Aplikacja do nauki matematyki</Text>
            {type == Type.LOGIN && <LoginForm changeToRegister={()=>setType(Type.REGISTER)} navigateToHome={navigateToHome} />}
            {type == Type.REGISTER && <RegisterForm changeToLogin={()=>setType(Type.LOGIN)} />}
        </View>
    );
};

export default LoginScene;