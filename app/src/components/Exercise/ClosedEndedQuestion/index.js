import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
//import MathText from 'react-native-math'; // doesn't work
import MathText from 'react-native-math';
import Katex from 'react-native-katex';
import { realm } from '../../../data';
import { colors } from '../../../constants';
import styles from './styles';
import CheckboxForm from '../../CheckboxForm';
import { ScrollView } from 'react-native-gesture-handler';


const ClosedEndedQuestion = ({ exercise, setMarked, children, disabled }) => {
    const radioProps = exercise.answers.map(answer => {
        return {
            label: <MathText
                key={answer}
                value={answer}
                style={[styles.text, styles.answer]}
                textSize={16}
                textColor={colors.DARK_GRAY} />,
            value: answer
        };
    });
   
    return (
        <ScrollView style={styles.container}>
            {/*<Katex expression={exercise.question}/>*/}
            <MathText
                value={exercise.question}
                style={styles.text}
                textSize={18}
                textColor={colors.DARK_GRAY} />
            < View style={styles.answers}>
                {false && <RadioForm
                    key={exercise.id}
                    radio_props={radioProps}
                    initial={-1}
                    onPress={value => setMarked(value)}
                    buttonColor={disabled ? colors.LIGHT_GRAY_2 : colors.DARK_GRAY}
                    selectedButtonColor={disabled ? colors.MAROON : colors.DARK_GRAY}
                    disabled={disabled}
                />
                }
                <CheckboxForm checkbox_props={radioProps} onSelect={value => setMarked(value)} />
            </View>
            {children}

        </ScrollView>
    );
};

ClosedEndedQuestion.defaultProps = {
    disabled: false
};

export default ClosedEndedQuestion;