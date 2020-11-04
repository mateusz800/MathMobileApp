import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
//import MathText from 'react-native-math'; // doesn't work
import MathText from 'react-native-math';
import Katex from 'react-native-katex';
import { realm } from '../../../data';
import { colors } from '../../../constants';
import styles from './styles';


const ClosedEndedQuestion = ({ exercise, setMarked, children, disabled }) => {
    const radioProps = exercise.answers.map(answer => {
        return {
            label: answer,
            value: answer
        };
    });
    console.log(exercise.question);
    //const test = "Przykładowe pytanie $x=\\frac{1+y}{1+2z^2}$"
    
    //const test = exercise.question;
    return (
        <View style={styles.container}>
            {/*<Katex expression={exercise.question}/>*/}
            <MathText 
                value={exercise.question}
                style={styles.text}
                textSize={18}
                textColor={colors.DARK_GRAY}/>
                    < View style={styles.answers}>
                <RadioForm
                    key={exercise.id}
                    radio_props={radioProps}
                    initial={-1}
                    onPress={value => setMarked(value)}
                    buttonColor={disabled ? colors.LIGHT_GRAY_2 : colors.DARK_GRAY}
                    selectedButtonColor={disabled ? colors.MAROON : colors.DARK_GRAY}
                    disabled={disabled}
                />
            </View>
            {children}

        </View>
    );
};

ClosedEndedQuestion.defaultProps = {
    disabled: false
};

export default ClosedEndedQuestion;