import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Image, Text, AppState } from 'react-native';

import LoginForm from '../../components/forms/LoginForm';
import RegisterForm from '../../components/forms/RegisterForm';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import { isAuthenticated } from '../../data/auth';

const Type = {
    LOGIN: 1,
    REGISTER: 2
}

const LoginScene = ({ route, navigation }) => {
    // TODO: navigate to home if user is logged
   // const [type, setType] = useState(Type.LOGIN)
    const type = route.params ? route.params.type:Type.LOGIN;
    useEffect(()=> {
        if(isAuthenticated()){
            navigation.navigate('Home');
        }
    })

    console.log("login scene");
    

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.appName}>AWNM</Text>
            <Text style={styles.appDesc}>Aplikacja do nauki matematyki</Text>
            {type == Type.LOGIN && <LoginForm navigation={navigation} registerType={Type.REGISTER}  />}
            {type == Type.REGISTER && <RegisterForm navigation={navigation} loginType={Type.LOGIN} />}
        </View>
    );
};

export default LoginScene;