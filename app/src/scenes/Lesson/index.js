import React from 'react';
import { View } from 'react-native';

import {realm} from '../../data';
import NavigationBar, { barType } from '../../components/NavigationBar';
import ClosedEndedQuestion from '../../components/ClosedEndedQuestion';

const Lesson = ({navigation}) => {
    const topic = realm.objects('Topic').filtered("name = 'algebra'")[0];
    const exercises = topic.exercises;
    //const exercise = topic.exercises[0];
    return (
        <View>
            <NavigationBar type={barType.LESSON} progress={1} maxProgress={6} navigation={navigation}/>
            <ClosedEndedQuestion exercise={exercises[0]} />
        </View>
    )
};

export default Lesson;