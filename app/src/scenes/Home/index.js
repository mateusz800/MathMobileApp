// export { default } from '../storybook'
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';

import NavigationBar from '../../components/NavigationBar'
import { barType } from '../../components/NavigationBar'
import RecentCourse from '../../components/RecentCourse';
import RecentCourses from '../../components/RecentCourses/index.js';
import { isAuthenticated } from '../../data/auth';
import withMenu from '../withMenu';

const Home = ({ navigation, toogleMenu }) => {
    if (!isAuthenticated()) {
        navigation.navigate('Login');
    }
    const navigateToLesson = (course) => {
        navigation.navigate('Lesson', { course: course });
    };
    return (
        <ScrollView>
            <NavigationBar type={barType.DEFAULT} toogleMenu={toogleMenu} />
            <RecentCourse goToLesson={(course) => navigateToLesson(course)} navigation={navigation} />
            <RecentCourses navigation={navigation} />
        </ScrollView>
    );
};

export default withMenu(Home);
