import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import NavigationBar, { barType } from '../../components/NavigationBar';
import Exercise from '../../components/Exercise';
import { getOfflineCourseExercises, getCourseExercises } from '../../data/exercises';
import { updateCourseLastAccessDate } from '../../data/courses';
import { colors, MAX_LESSON_LENGTH } from '../../constants';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Lesson = ({ route, navigation }) => {
    const { course } = route.params;
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [exercises, setExercises] = useState(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (!loaded) {
            getCourseExercises(setExercises, course, MAX_LESSON_LENGTH, false);
            setLoaded(true);
            updateCourseLastAccessDate(course);
        }
    });
    const nextExercise = () => {
        if (exerciseIndex + 1 < exercises.length) {
            setExerciseIndex(exerciseIndex + 1);
        }
        else {
            // TODO: end of lesson - show summary
            navigation.pop();
        }
    };
    return (
        <ScrollView>
            <NavigationBar type={barType.LESSON} progress={exerciseIndex} maxProgress={exercises ? exercises.length : 0} navigation={navigation} />
            {exercises && exercises.length > 0 &&
                <Exercise exercise={exercises[exerciseIndex]} nextFunc={nextExercise} last={exerciseIndex + 1 == exercises.length ? true : false} />}
            {exercises && exercises.length == 0 &&
                /* TODO: Create page, add abbilty to repeat already solved ones */
                <View style={{ display: 'flex', marginTop: 200, paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 20 }}>Brak nowych zadań.</Text>
                    <Text style={{ fontSize: 14, textAlign: 'justify', marginTop: 50 }}>
                        Możesz jednak powtarzać zadania wcześniej już rozwiązane. Kliknij w poniższy przycisk, aby zacząć.
                    </Text>
                    <TouchableWithoutFeedback style={{ backgroundColor: colors.MAROON, width: 150, padding: 10, marginTop: 20 }}
                        onPress={() => getCourseExercises(setExercises, course, MAX_LESSON_LENGTH, true)}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Powtarzaj</Text>
                    </TouchableWithoutFeedback>
                </View>
            }

        </ScrollView>
    )
};

export default Lesson;