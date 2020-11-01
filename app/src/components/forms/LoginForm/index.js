import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { authenticate } from '../.,/../../../data/auth'
import styles from './styles';

const LoginForm = ({ changeToRegister, navigateToHome }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login (){
        const result =  await authenticate(email, password);
        if(result == true){
            setEmail("");
            setPassword("");
            navigateToHome();
            return;
        }
        // TODO: show message - login failed
        console.log("login failed");
    }


    return (
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder="adres e-mail" value={email} onChangeText={text => setEmail(text)} label="email" />
            <TextInput style={styles.input} placeholder="hasło" value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} />
            <TouchableWithoutFeedback style={styles.loginBtn} onPress={login}>
                <Text style={styles.loginText}>Zaloguj się</Text>
            </TouchableWithoutFeedback>
            <View style={styles.changeTypeMessage}>
                <Text>Nie masz konta?</Text>
                <TouchableWithoutFeedback onPress={changeToRegister} >
                    <Text style={styles.registerLink}>Zarejestruj się</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

export default LoginForm;