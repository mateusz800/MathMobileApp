import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { register } from '../../../data/auth'
import styles from './styles';

const RegisterForm = ({ navigation, loginType }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordsMatch, setPasswordMatch] = useState(true);

    const checkRepeatPassword = (repeatPassword) => {
        if(password != repeatPassword && passwordsMatch){
            setPasswordMatch(false);
        } else if (!passwordsMatch){
            setPasswordMatch(true);
        }
    }

    async function tryToRegister() {
        if(!passwordsMatch){
            // TODO: show message
            return;
        }
        const result = await register(email, password);
        if(result == true){
            navigation.navigate("Login", {type:loginType})
            return;
        }
        // TODO: show message - registration failed
        console.log("registration failed");
    }

    const goToLoginForm = () => {
        navigation.navigate("Login", {type: loginType});
    }


    return (
        <View style={styles.form}>
            <TextInput style={styles.input} placeholder="adres e-mail" onChangeText={text => setEmail(text)} label="email" />
            <TextInput style={styles.input} placeholder="hasło" onChangeText={text => setPassword(text)} secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="powtórz hasło" onChangeText={text => checkRepeatPassword(text)} secureTextEntry={true}/>
            <TouchableWithoutFeedback style={styles.registerBtn} onPress={tryToRegister}>
                <Text style={styles.registerText}>Zarejestruj się</Text>
            </TouchableWithoutFeedback>
            <View style={styles.changeTypeMessage}>
                <Text>Masz już konto?</Text>
                <TouchableWithoutFeedback onPress={goToLoginForm} >
                    <Text style={styles.registerLink}>Zaloguj się</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
};

export default RegisterForm;