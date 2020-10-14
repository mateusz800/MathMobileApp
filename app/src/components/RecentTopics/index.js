import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


import Card from '../Card';
import styles from './styles'
import { realm } from '../../data';


const RecentTopics = ({ navigation }) => {
    const courses = realm.objects('Course');
    const cards = courses.map(course => (
        <TouchableWithoutFeedback
            key={course.id}
            onPress={() => navigation.navigate('Course details', { name: course.name, imageIdent: course.images[0] })}>
                <Card imageUrl={course.images[0]} size={'30%'} title={course.name} />
        </TouchableWithoutFeedback>));
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ostatnie tematy</Text>
            <ScrollView
                style={styles.cards}
                horizontal={true}
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start' }}
                showsHorizontalScrollIndicator={false}>
                {cards}
            </ScrollView>
        </View>
    );
};


export default RecentTopics;

