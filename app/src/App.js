// export { default } from '../storybook'
import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScene from './scenes/Home';
import CourseDetailsScene from './scenes/CourseDetails';
import LessonScene from './scenes/Lesson';
import LoginScene from './scenes/Login';
import { initRealmDatabase } from './data';


const Stack = createStackNavigator();

const App = () => {
    initRealmDatabase();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={LoginScene} options={{ headerShown: false, animationEnabled: false }} />
                <Stack.Screen name='Home' component={HomeScene} options={{ headerShown: false, animationEnabled: false }} />
                <Stack.Screen name='Course details' component={CourseDetailsScene} options={{ headerShown: false, animationEnabled: false }} />
                <Stack.Screen name='Lesson' component={LessonScene} options={{ headerShown: false, animationEnabled: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default App;
