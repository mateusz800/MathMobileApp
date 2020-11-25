import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { logout } from '../../data/auth';
import { TextInput } from 'react-native';

import { getLastAccessedCourses } from '../../data/courses';
import styles from './styles';
import { color } from 'react-native-reanimated';
import { colors } from '../../constants';

const Menu = ({ show, navigation }) => {
    const [courses, setCourses] = useState(null);
    const [searchText, setSearchText] = useState("");
    if (!show) {
        return null;
    }
    const logoutOperation = () => {
        logout().then(() => {
            navigation.navigate('Login');
        });
    }

    console.log(courses);
    const searchCourses = () => {
        navigation.navigate("Courses", { name: searchText });
    }

    return (
        <View style={styles.container}>
            <Text>Szukaj kursów</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setSearchText(text)}
                value={searchText}
            />
            <Button title="szukaj" onPress={searchCourses} color={colors.MAROON} />

            <View style={{ marginTop: 100 }}>
                <Button title="Rozpoczęte kursy" onPress={()=>navigation.navigate('Courses', {recent:true})} color={colors.MAROON} />
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title="Wszystkie kursy" onPress={()=>navigation.navigate('Courses', {all:true})} color={colors.MAROON} />
            </View>

            <View style={{ marginTop: 10 }}>
                <Button title="Wyloguj" onPress={logoutOperation} color={colors.MAROON} />
            </View>
        </View>
    );
};

export default Menu;