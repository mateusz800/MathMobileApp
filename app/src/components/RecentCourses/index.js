import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


import Card from '../Card';
import styles from './styles'
import { getOfflineCourses, getCourses } from '../../data/courses';


const RecentCourses = ({ navigation }) => {
    const [courses, setCourses] = useState(getOfflineCourses);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        if(!loaded){
            getCourses(setCourses);
            setLoaded(true);
        }
    });
    let cards = courses.map(course => (
        <TouchableWithoutFeedback
            key={course.name}
            onPress={() => navigation.navigate('Course details', { course: course })}>
            <Card imageUrl={course.image} size={'30%'} title={course.name}  key={course.name}/>
        </TouchableWithoutFeedback>
    ));
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ostatnie tematy</Text>
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

