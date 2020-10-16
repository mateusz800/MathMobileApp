import React from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


import Card from '../Card';
import styles from './styles'
import { realm } from '../../data';


const RecentTopics = ({ navigation }) => {
    const topics = realm.objects('Topic');
    const cards = topics.map(topic => (
        <TouchableWithoutFeedback
            key={topic.id}
            onPress={() => navigation.navigate('Course details', { name: topic.name, imageIdent: topic.image })}>
                <Card imageUrl={topic.image} size={'30%'} title={topic.name} />
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

