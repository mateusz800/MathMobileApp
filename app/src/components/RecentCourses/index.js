import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import NetInfo from "@react-native-community/netinfo";


import Card from '../Card';
import styles from './styles'
import { getOfflineCourses,  getLastAccessedCourses } from '../../data/courses';


const RecentCourses = ({ navigation }) => {
    const [courses, setCourses] = useState(null);
    const [offline, setOffline] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => {
            getLastAccessedCourses(setCourses);
        });
    });

    NetInfo.addEventListener((state) => {
        if (!state.isConnected && !offline) {
            getOfflineCourses(setCourses);
            setOffline(true);
        }
        else if (state.isConnected && offline) {
            getLastAccessedCourses(setCourses);
            setOffline(false);
        }
    });
    if (courses == null || courses == undefined || courses.length<=1) {
        return null;
    }
    
    let cards = courses.slice(1).map(course => (
        <TouchableWithoutFeedback
            key={course.name}
            onPress={() => navigation.navigate('Course details', { course: course })}>
            <Card imageUrl={course.image} size={{ width: 130, height: 120 }} title={course.name} key={course.name} />
        </TouchableWithoutFeedback>
    ));
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Rozpoczęte kursy (offline)</Text>
            </View>
            <ScrollView
                style={styles.cards}
                horizontal={true}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
                showsHorizontalScrollIndicator={false}>
                {cards}
            </ScrollView>

        </View>
    );
    
};


export default RecentCourses;

