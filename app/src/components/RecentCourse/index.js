import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { RGBA } from 'react-native-color-matrix-image-filters';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { colorsRGB } from '../../constants';

import Card from '../Card';
import { getLastAccessedCourse } from '../../data/courses';
import { colors } from '../../constants'
import styles from './styles';
import { useRef } from 'react';

const RecentCourse = ({ goToLesson, navigation, }) => {
    const [course, setCourse] = useState(null);
    useEffect(() => {
        navigation.addListener('focus', () => {
            console.log("refresh");
            getLastAccessedCourse(setCourse);
        });
    });
    function startLesson() {
        goToLesson(course.id);
    };

    if (course) {
        return (
            <TouchableWithoutFeedback style={styles.container} onPress={startLesson} >
                <View style={styles.header}>
                    <Text style={styles.title}>Kontynuuj naukę</Text>
                </View>
                <View style={styles.center}>
                    <Card imageUrl={course.image} size={{ width: Dimensions.get('window').width -10, height: 150 }} title={course.name} />
                </View>

            </TouchableWithoutFeedback>
        )
    }
    return null;

};

export default RecentCourse;