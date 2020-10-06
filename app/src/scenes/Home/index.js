// export { default } from '../storybook'
import React from 'react';
import { ScrollView, View, Button, TouchableWithoutFeedback } from 'react-native';

import NavigationBar from '../../components/NavigationBar'
import { barType } from '../../components/NavigationBar'
import YourCourses from '../../components/YourCourses/index.js';

const Home = ({ navigation }) => {
    return (
        <ScrollView>
            <NavigationBar type={barType.DEFAULT}/>
            <YourCourses navigation={navigation}/>
        </ScrollView>
    );
};

export default Home;
