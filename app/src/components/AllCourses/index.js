import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import NetInfo from "@react-native-community/netinfo";

import Card from '../Card';
import { getCourses, getOfflineCourses } from '../../data/courses';
import styles from './styles';

const AllCourses = ({ navigation }) => {
    const [courses, setCourses] = useState(null);
    const [offline, setOffline] = useState(false);
    useEffect(() => {
            getCourses(setCourses);
    },[]);
    NetInfo.addEventListener((state) => {
        if (!state.isConnected && !offline) {
            getOfflineCourses(setCourses);
            setOffline(true);
        }
        else if (state.isConnected && offline) {
            getCourses(setCourses);
            setOffline(false);
        }
    });

    if (courses == null || courses == undefined) {
        return null;
    }
    let cards = courses.map(course => (
        <TouchableWithoutFeedback
            key={course.name}
            onPress={() => {
                //navigation.setOptions({course:course});
                navigation.navigate('Course details', { course: course })}}>
            <Card imageUrl={course.image} size={{ width: Dimensions.get('window').width * 0.5 - 8, height: 120 }} title={course.name} /*text={course.desc}*/ key={course.name} />
        </TouchableWithoutFeedback>
    ));
    return (

        <View >

            <Text style={styles.title}>Wszystkie kursy</Text>

            <View style={styles.container}>
                {cards}
            </View>
        </View>
    );
};

export default AllCourses;