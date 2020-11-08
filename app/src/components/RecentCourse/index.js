import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { RGBA } from 'react-native-color-matrix-image-filters';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { colorsRGB } from '../../constants';

import { getLastAccessedCourse } from '../../data/courses';
import { colors } from '../../constants'
import styles from './styles';
import { useRef } from 'react';

const RecentCourse = ({ goToLesson, navigation }) => {
    const [course, setCourse] = useState(null);
    const prevNavigation = useRef();
    useEffect(() => {
        if (prevNavigation != navigation) {
            getLastAccessedCourse(setCourse);
            prevNavigation.current = navigation;
        }
    });

    function startLesson() {
        goToLesson(course.id);
    };

    if (course) {
        return (
            <View style={styles.container} >
                <View style={{ backgroundColor: 'white', width: '100%', height: 30, position: 'absolute', right: 0 }} />
                <View style={{ display: 'flex', flexDirection: 'row', position: 'absolute', }}>
                    <View style={styles.sectionTitleContainer}>
                        <Text style={styles.sectionTitle}>Kontynuuj naukę</Text>
                    </View>
                    <View style={styles.headerTriangle} />
                </View>
                <View style={{ elevation: -1 }}>
                    <LinearGradient
                        colors={['rgba(255,255,255,0)', colors.MAROON]}
                        start={{ x: 0.5, y: -1 }}
                        end={{ x: 0.5, y: 0.8 }}
                    >
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: course.image }} style={styles.image} />
                            <View style={{ marginTop: 75 }}>
                                <Text style={styles.courseName}>{course.name.toUpperCase()}</Text>
                                <TouchableWithoutFeedback style={styles.continueButton} onPress={startLesson}>
                                    <Text style={{ color: 'white', marginRight: 20 }}>Kontynuuj</Text>
                                    <View style={styles.triangle} />
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                    </LinearGradient>
                    <View style={styles.gradientTriangle} />
                </View>
                <View style={styles.section}>


                </View>
            </View>
        )
    }
    return null;

};

export default RecentCourse;