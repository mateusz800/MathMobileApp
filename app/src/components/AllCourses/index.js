import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Card from '../Card';
import { getCourses } from '../../data/courses';
import styles from './styles';

const AllCourses = ({ navigation }) => {
    const [courses, setCourses] = useState(null);
    useEffect(() => {
        if(courses == null){
            getCourses(setCourses);
        }
        
    })
    if (courses == null || courses == undefined) {
        return null;
    }
    let cards = courses.map(course => (
        <TouchableWithoutFeedback
            key={course.name}
            onPress={() => navigation.navigate('Course details', { course: course })}>
            <Card imageUrl={course.image} size={{ width: Dimensions.get('window').width * 0.5 - 8, height: 120 }} title={course.name} text={course.desc} key={course.name} />
        </TouchableWithoutFeedback>
    ));
    return (

        <View >

            <Text style={styles.title}>Wszytskie kursy</Text>

            <View style={styles.container}>
                {cards}
            </View>
        </View>
    );
};

export default AllCourses;