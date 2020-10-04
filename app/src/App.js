// export { default } from '../storybook'
import React from 'react';
import { View } from 'react-native';

import NavigationBar from './components/NavigationBar/index.js'

const App = () => {
    return (
        <View>
            <NavigationBar title='Trygonometria'/>
        </View>
    );
};

export default App;
