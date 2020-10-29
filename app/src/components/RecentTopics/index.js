import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Button } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


import Card from '../Card';
import styles from './styles'
import { realm } from '../../data';
import { getOfflineTopics, getTopics } from '../../data/topics';


const RecentTopics = ({ navigation }) => {
    const [topics, setTopics] = useState(getOfflineTopics);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        if(!loaded){
            getTopics(setTopics);
            setLoaded(true);
        }
    });
    
    let cards = topics.map(topic => (
        <TouchableWithoutFeedback
            key={topic.name}
            onPress={() => navigation.navigate('Course details', { topic: topic })}>
            <Card imageUrl={topic.image} size={'30%'} title={topic.name}  key={topic.name}/>
        </TouchableWithoutFeedback>
    ));
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

