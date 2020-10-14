import React from 'react';
import { ScrollView, View, Button , Image, Text} from 'react-native';

import NavigationBar, { barType } from '../../components/NavigationBar';
import images from '../../constants/images';

const CourseDetails = ({ route }) => {
    const { name, imageIdent } = route.params;
    return (
        <ScrollView>
            <NavigationBar type={barType.DETAILS} title={name} />
            <Image source={images[imageIdent]} style={{width:'75%', margin:'7.5%'}}/>
            <Text>{name.toUpperCase()}</Text>
            <Button title="Rozpocznij kurs"/>
        </ScrollView>
    );
};

export default CourseDetails;