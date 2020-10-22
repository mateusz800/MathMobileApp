import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { realm } from '../../data';
import NavigationBar, { barType } from '../../components/NavigationBar';
import Exercise from '../../components/Exercise';
import { getTopicExercises } from '../../data/exercises';
import { MAX_LESSON_LENGTH } from '../../constants';

const Lesson = ({ navigation }) => {
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const exercises = useState(getTopicExercises('algebra', MAX_LESSON_LENGTH))[0];
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
            <NavigationBar type={barType.LESSON} progress={exerciseIndex} maxProgress={exercises.length} navigation={navigation} />
            {exercises.length > 0 && <Exercise exercise={exercises[exerciseIndex]} nextFunc={nextExercise} last={exerciseIndex + 1 == exercises.length ? true : false} />}

        </View>
    )
};

export default Lesson;