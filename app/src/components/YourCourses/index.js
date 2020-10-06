import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { StackNavigator } from '@react-navigation/stack';

import Card from '../Card';
import styles from './styles'



const YourCourses = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rozpoczete kursy</Text>
            <ScrollView
                style={styles.cards}
                horizontal={true}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                showsHorizontalScrollIndicator={false}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Course details', { name: 'trygonometria', imageIdent:'functions' })} style={{marginLeft:10}}>
                    <Card imageUrl='functions' size={'30%'} title='funkcje' />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Course details', { name: 'trygonometria' })}>
                    <Card imageUrl='functions' size={'30%'} title='funkcje' />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Course details', { name: 'trygonometria' })}>
                    <Card imageUrl='functions' size={'30%'} title='funkcje' />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Course details', { name: 'trygonometria' })} style={{marginRight:10}}>
                    <Card imageUrl='functions' size={'30%'} title='funkcje' />
                </TouchableWithoutFeedback>
            </ScrollView>
        </View>
    );
};

export default YourCourses;
