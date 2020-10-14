import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

import { colors } from '../../constants';
import styles from './styles';


const ClosedEndedQuestion = () => {
    const [value, setValue] = useState(-1);
    const [answered, setAnswered] = useState(false);
    const question = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const correctAnswer = 1;
    const radio_props = [
        { label: 'odpowiedz 0', value: 0 },
        { label: 'odpowiedz 1', value: 1 },
        { label: 'odpowiedz 2', value: 2 },
        { label: 'odpowiedz 3', value: 3 }
    ];
    const checkAnswer = () => {
        if (value != -1) {
            // checking answer
            if (value == correctAnswer) {
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
            <Text style={styles.text}>{question}</Text>
            <View style={styles.answers}>
                <RadioForm
                    radio_props={radio_props}
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