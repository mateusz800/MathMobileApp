import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import NavigationBar, { barType } from '../../components/NavigationBar';
import Exercise from '../../components/Exercise';
import { getOfflineCourseExercises, getCourseExercises } from '../../data/exercises';
import { MAX_LESSON_LENGTH } from '../../constants';

const Lesson = ({ route, navigation }) => {
    const { course } = route.params;
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const [exercises, setExercises] = useState(getOfflineCourseExercises(course, MAX_LESSON_LENGTH));
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        if (!loaded) {
            getCourseExercises(setExercises, course, MAX_LESSON_LENGTH);
            setLoaded(true);
        }
    });

    const nextExercise = () => {
        if (exerciseIndex + 1 < exercises.length) {
            setExerciseIndex(exerciseIndex + 1);
        }
        else {
            // TODO: end of lesson - show summary
            navigation.pop()
        }
    };
    return (
        <View>
            <NavigationBar type={barType.LESSON} progress={exerciseIndex} maxProgress={exercises ? exercises.length : 0} navigation={navigation} />
            {exercises && exercises.length > 0 &&
                <Exercise exercise={exercises[exerciseIndex]} nextFunc={nextExercise} last={exerciseIndex + 1 == exercises.length ? true : false} />}

        </View>
    )
};

export default Lesson;