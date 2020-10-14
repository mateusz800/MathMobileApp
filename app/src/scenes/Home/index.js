// export { default } from '../storybook'
import React from 'react';
import { ScrollView, View, Button, TouchableWithoutFeedback } from 'react-native';

import NavigationBar from '../../components/NavigationBar'
import { barType } from '../../components/NavigationBar'
import RecentTopics from '../../components/RecentTopics/index.js';

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <NavigationBar type={barType.DEFAULT}/>
            <RecentTopics navigation={navigation}/>
            <Button title='exercise' onPress={()=>navigation.navigate('Lesson')}/>
        </ScrollView>
    );
};

export default Home;
