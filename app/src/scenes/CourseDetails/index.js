import React from 'react';
import { ScrollView, View, Button, Image, Text, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import MathText from 'react-native-math';

import NavigationBar, { barType } from '../../components/NavigationBar';
import images from '../../constants/images';
import { colors } from '../../constants';
import styles from './styles';
import withOptionsMenu from '../withOptionsMenu';
import { saveCourseInDevice } from '../../data/courses';

const options = [{
    text: "Zapisz w pamięci urządzenia",
    "function": null
}];


const CourseDetails = ({ route, navigation, toggleOptionsMenu }) => {
    const { course } = route.params;
    console.log(course.desc);
    options[0].function = async () => saveCourseInDevice(course).then(() => alert("Kurs został zapisany w pamięci urządzenia. Teraz możesz z niego korzystać nawet, gdy jesteś offline."));
    return (
        <ScrollView>
            <NavigationBar type={barType.DETAILS} title={course.name} navigation={navigation} toggleOptionsMenu={toggleOptionsMenu} />
            <View style={{elevation:999}}>
                <LinearGradient
                    colors={['rgba(255,255,255,0)', colors.MAROON]}
                    start={{ x: 0.5, y: -1.5 }}
                    end={{ x: 0.5, y: 1.5 }}
                >
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: course.image }} style={{ width: '50%', height: Dimensions.get("window").width * 0.5, margin: '15%' }} resizeMode="contain" />
                    </View>
                </LinearGradient>
                <View>
                    <View style={styles.titleContainer}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{course.name.toUpperCase()}</Text>
                        </View>
                    </View>
                    <View style={styles.learnBtnContainer}>
                        <TouchableWithoutFeedback style={styles.learnBtn} onPress={() => navigation.navigate('Lesson', { course: course.id })}>
                            <Text style={styles.learnBtnText}>Rozwiązuj zadania</Text>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <MathText
                            value={course.desc}
                            style={{ height: 250, marginTop: 50, backgroundColor: null }}
                            textSize={18} />
                    </View>
                </View>
            </View>

        </ScrollView>
    );
};


export default withOptionsMenu(options, CourseDetails)