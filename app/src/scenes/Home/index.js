// export { default } from '../storybook'
import React from 'react';
import { ScrollView } from 'react-native';

import NavigationBar from '../../components/NavigationBar'
import { barType } from '../../components/NavigationBar'
import RecentCourses from '../../components/RecentCourses/index.js';
import withMenu from '../withMenu';

const Home = ({ navigation, toogleMenu }) => {
    return (
        <ScrollView>
            <NavigationBar type={barType.DEFAULT} toogleMenu={toogleMenu}/>
            <RecentCourses navigation={navigation}/>
        </ScrollView>
    );
};

export default withMenu(Home);
