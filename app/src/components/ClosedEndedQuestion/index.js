import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

import { realm } from '../../data';
import { colors } from '../../constants';
import styles from './styles';


const ClosedEndedQuestion = ({exercise}) => {
    const [value, setValue] = useState(-1);
    const [answered, setAnswered] = useState(false);
    const correctAnswer = 1;
    const radioProps = exercise.answers.map(answer => {
        return {
            label: answer, 
            value: answer
        };
    });
    const checkAnswer = () => {
        if (value != -1) {
            // checking answer
            if (value == exercise.correctAnswer) {
                setAnswered(true);
            }
            else {
                // TODO show message - bad answer
            }
        }
        else {
            // TODO: show message - no answer selected
        }
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{exercise.question}</Text>
            <View style={styles.answers}>
                <RadioForm
                    radio_props={radioProps}
                    initial={value}
                    onPress={value => setValue(value)}
                    buttonColor={colors.DARK_GRAY}
                    selectedButtonColor={colors.DARK_GRAY} />
            </View>
            <Button title={answered == false ? "Sprawdż odpowiedź" : "Następne zadanie"} onPress={checkAnswer} />
        </View>
    );
};

export default ClosedEndedQuestion;