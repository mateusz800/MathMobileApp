import React, { useState } from 'react';
import { Systrace, View } from 'react-native';

import {realm} from '../../data';
import NavigationBar, { barType } from '../../components/NavigationBar';
import Exercise from '../../components/Exercise';

const Lesson = ({navigation}) => {
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const topic = realm.objects('Topic').filtered("name = 'algebra'")[0];
    const exercises = topic.exercises;
    const nextExercise = () => {
        console.log(exerciseIndex);
        if(exerciseIndex+1  < exercises.length){
            setExerciseIndex(exerciseIndex+1);
        }
        else{
            // TODO: end of lesson - show summary
            console.log('end');
            navigation.pop()
        }
    };
    return (
        <View>
            <NavigationBar type={barType.LESSON} progress={exerciseIndex} maxProgress={exercises.length} navigation={navigation}/>
            <Exercise exercise={exercises[exerciseIndex]} nextFunc={nextExercise} last={exerciseIndex+1 == exercises.length? true:false} />
        </View>
    )
};

export default Lesson;