// export { default } from '../storybook'
import React, { Fragment } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import AllCourses from '../../components/AllCourses';

import NavigationBar from '../../components/NavigationBar'
import { barType } from '../../components/NavigationBar'
import RecentCourse from '../../components/RecentCourse';
//import RecentCourses from '../../components/RecentCourses/index.js';
import { isAuthenticated } from '../../data/auth';
import withMenu from '../withMenu';

const Home = ({ navigation, toogleMenu }) => {
    useEffect(()=> {
        if (!isAuthenticated()) {
            navigation.navigate('Login');
        }
    },[])
    
    
    const navigateToLesson = (course) => {
        navigation.navigate('Lesson', { course: course });
    };


    console.log("home scene");
    return (
        <Fragment>
            <NavigationBar type={barType.DEFAULT} toogleMenu={toogleMenu} />
            <ScrollView>
                <RecentCourse goToLesson={(course) => navigateToLesson(course)} navigation={navigation} />
                {/*<RecentCourses navigation={navigation} />*/}
                <AllCourses navigation={navigation}/>
            </ScrollView>
        </Fragment>
    );
};

export default withMenu(Home);
