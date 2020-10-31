import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import styles from './styles';

const LoginForm = ({changeToRegisterFunc}) => {
    const login = () => {
        
    }
    return (
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder="adres e-mail" />
            <TextInput style={styles.input} placeholder="hasło" />
            <TouchableWithoutFeedback style={styles.loginBtn} onPress={login}>
                <Text style={styles.loginText}>Zaloguj się</Text>
            </TouchableWithoutFeedback>
            <View style={styles.changeTypeMessage}>
                <Text>Nie masz konta?</Text>
                <TouchableWithoutFeedback onPress={changeToRegisterFunc} >
                    <Text style={styles.registerLink}>Zarejestruj się</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

export default LoginForm;