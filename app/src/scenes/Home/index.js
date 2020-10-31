// export { default } from '../storybook'
import React from 'react';
import { ScrollView, View, Button, TouchableWithoutFeedback } from 'react-native';

import NavigationBar from '../../components/NavigationBar'
import { barType } from '../../components/NavigationBar'
import RecentCourses from '../../components/RecentCourses/index.js';
import { clearAllAnswers } from '../../data/exercises';
import withMenu from '../withMenu';

const Home = ({ navigation, toogleMenu }) => {
    return (
        <ScrollView>
            <NavigationBar type={barType.DEFAULT} toogleMenu={toogleMenu}/>
            <RecentCourses navigation={navigation}/>
            <Button title="clear answers" onPress={clearAllAnswers}/>
        </ScrollView>
    );
};

export default withMenu(Home);
