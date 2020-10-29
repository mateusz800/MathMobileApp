import React from 'react';
import { ScrollView, View, Button, Image, Text, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import NavigationBar, { barType } from '../../components/NavigationBar';
import images from '../../constants/images';
import { colors } from '../../constants';
import styles from './styles';


const CourseDetails = ({ route, navigation }) => {
    const { topic } = route.params;
    return (
        <ScrollView>
            <NavigationBar type={barType.DETAILS} title={topic.name} navigation={navigation} />
            <LinearGradient
                colors={['rgba(255,255,255,0)', colors.MAROON]}
                start={{ x: 0.5, y: -1.5 }}
                end={{ x: 0.5, y: 1.5 }}
            >
                <View style={styles.imageContainer}>
                    <Image source={{ uri: topic.image }} style={{ width: '50%', height: Dimensions.get("window").width * 0.5, margin: '15%' }} />
                </View>
            </LinearGradient>
            <View style={styles.titleContainer}>
                <View style={styles.title}>
                    <Text style={styles.titleText}>{topic.name.toUpperCase()}</Text>
                </View>
            </View>
            <View style={styles.descContainer}>
                <Text>{topic.desc}</Text>
            </View>
            <View style={styles.learnBtnContainer}>
                <TouchableWithoutFeedback style={styles.learnBtn} onPress={() => navigation.navigate('Lesson', { topic: topic.name })}>
                    <Text style={styles.learnBtnText}>Ucz się</Text>
                </TouchableWithoutFeedback>
            </View>
        </ScrollView>
    );
};

export default CourseDetails;