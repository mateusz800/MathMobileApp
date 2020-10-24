// export { default } from '../storybook'
import React from 'react';
import { ScrollView, View, Button, TouchableWithoutFeedback } from 'react-native';

import NavigationBar from '../../components/NavigationBar'
import { barType } from '../../components/NavigationBar'
import RecentTopics from '../../components/RecentTopics/index.js';
import { clearAllAnswers } from '../../data/exercises';

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <NavigationBar type={barType.DEFAULT}/>
            <RecentTopics navigation={navigation}/>
            <Button title="clear answers" onPress={clearAllAnswers}/>
        </ScrollView>
    );
};

export default Home;
