import React, { isValidElement, useEffect, useState } from 'react';
import { View, Text, Button, Image, Dimensions } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
//import MathText from 'react-native-math'; // doesn't work
import MathText from 'react-native-math';
import Katex from 'react-native-katex';
import { realm } from '../../../data';
import { colors } from '../../../constants';
import styles from './styles';
import CheckboxForm from '../../CheckboxForm';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput } from 'react-native';


const OpenExercise = ({ exercise, children, disabled, setAnswer }) => {
    const [userAnswer, setUserAnswer] = useState("");
    const changeAnswer = (value) => {
        console.log(value);
        setUserAnswer(value);
        setAnswer(value);
    }
    return (
        <ScrollView style={styles.container}>
            {/*<Katex expression={exercise.question}/>*/}
            { exercise.image &&
                <View style={{ display: 'flex', alignItems: 'center' }}>
                    <Image source={{ uri: exercise.image }} style={{ width: 200, height: 100, marginBottom: 50 }} resizeMode="contain" />
                </View>
            }
            <MathText
                value={exercise.question}
                style={styles.text}
                textSize={18}
                textColor={colors.DARK_GRAY} />
            < View style={styles.answers}>

                <TextInput onChangeText={(text) => changeAnswer(text)} value={userAnswer}  style={{borderWidth:1, borderColor:colors.DARK_GRAY}}/>
            </View>
            {children}

        </ScrollView>
    );
};


export default OpenExercise;