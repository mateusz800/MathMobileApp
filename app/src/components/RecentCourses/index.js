import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import NetInfo from "@react-native-community/netinfo";


import Card from '../Card';
import styles from './styles'
import { getOfflineCourses, getCourses } from '../../data/courses';


const RecentCourses = ({ navigation }) => {
    const [courses, setCourses] = useState(null);
    const [offline, setOffline] = useState(false);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        if(courses==null){
            getCourses(setCourses);
            setLoaded(true);
        }
    });
    NetInfo.addEventListener((state) => {
        if(!state.isConnected && !offline){
            setCourses(getOfflineCourses);
            setOffline(true);
        }
        else if(state.isConnected && offline){
            getCourses(setCourses);
            setOffline(false);
        }
      });

    if(courses == null || courses == undefined){
        return null;
    }
    let cards = courses.map(course => (
        <TouchableWithoutFeedback
            key={course.name}
            onPress={() => navigation.navigate('Course details', { course: course })}>
            <Card imageUrl={course.image} size={'30%'} title={course.name}  key={course.name}/>
        </TouchableWithoutFeedback>
    ));
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kursy</Text>
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

