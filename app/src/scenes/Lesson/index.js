import React from 'react';
import { View } from 'react-native';

import NavigationBar, { barType } from '../../components/NavigationBar';
import ClosedEndedQuestion from '../../components/ClosedEndedQuestion';

const Lesson = () => {
    return (
        <View>
            <NavigationBar type={barType.LESSON} progress={1} maxProgress={6} />
            <ClosedEndedQuestion />
        </View>
    )
};

export default Lesson;