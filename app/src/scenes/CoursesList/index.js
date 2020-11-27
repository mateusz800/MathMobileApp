import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import NavigationBar, { barType } from '../../components/NavigationBar';
import { Dimensions, View, Text } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import NetInfo from "@react-native-community/netinfo";
import axios from 'axios';

import Card from '../../components/Card';
import { getCourses, getLastAccessedCourse, getLastAccessedCourses, getOfflineCourses } from '../../data/courses';
import { config } from '../../constants';
import { getJWT } from '../../data/auth';


const CoursesList = ({ route, navigation }) => {
    const { name, all, recent } = route.params;
    const [courses, setCourses] = useState(null);
    const [offline, setOffline] = useState(false);
    const [cards, setCards] = useState(null);
    useEffect(() => {
        getCourses(setCourses);
    }, []);

    useEffect(() => {
        console.log(courses);
        if (courses && courses.length>0) {
            setCards(courses.map(course => (
                <TouchableWithoutFeedback
                    key={course.name}
                    onPress={() => {
                        //navigation.setOptions({course:course});
                        navigation.navigate('Course details', { course: course })
                    }}>
                    <Card imageUrl={course.image} size={{ width: Dimensions.get('window').width * 0.5 - 8, height: 120 }} title={course.name} /*text={course.desc}*/ key={course.name} />
                </TouchableWithoutFeedback>
            )));
        }
    }, [courses])
    /*
    NetInfo.addEventListener((state) => {
        if (!state.isConnected && !offline) {
            getOfflineCourses(setCourses);
            setOffline(true);
        }
        else if (state.isConnected && offline) {
            getCourses(setCourses);
            setOffline(false);
        }
    });
    */

    const getCourses = () => {
        if (recent) {
            getLastAccessedCourses(setCourses);
        }
        else {
            getJWT().then(jwt => {
                axios({
                    method: 'GET',
                    url: `${config.API_URL}/courses?${name ? `name=${name}` : ''}`,
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                }).then(response => setCourses(response.data.content));
            })
        }

    }

    if (courses == null || courses == undefined) {
        return <NavigationBar type={barType.DETAILS} navigation={navigation} title={(name && "Szukaj: " + name) || (all && "Wszystkie kursy") || (recent && "Rozpoczete kursy (offline)")} />
    }
    
    return (
        <View>
            <NavigationBar type={barType.DETAILS} navigation={navigation} title={(name && "Szukaj: " + name) || (all && "Wszystkie kursy") || (recent && "Rozpoczete kursy (offline)")} />
            <ScrollView style={{ marginBottom: 50 }}>
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {cards}
                </View>
            </ScrollView>
        </View>
    );
}

export default CoursesList;