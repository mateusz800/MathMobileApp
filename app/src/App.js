// export { default } from '../storybook'
import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScene from './scenes/Home';
import CourseDetailsScene from './scenes/CourseDetails';
import { initRealmDatabase } from './data';
import Lesson from './scenes/Lesson';

const Stack = createStackNavigator();

const App = () => {
    initRealmDatabase();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={HomeScene} options={{ headerShown: false, animationEnabled: false }}/>
                <Stack.Screen name='Course details' component={CourseDetailsScene} options={{ headerShown: false, animationEnabled: false}} />
                <Stack.Screen name='Lesson' component={Lesson} options={{ headerShown: false, animationEnabled: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
        
    );
};

export default App;
