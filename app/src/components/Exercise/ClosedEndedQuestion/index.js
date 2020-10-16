import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';

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
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{exercise.question}</Text>
            <View style={styles.answers}>
                <RadioForm
                    key={exercise.id}
                    radio_props={radioProps}
                    initial={-1}
                    onPress={value => setMarked(value)}
                    buttonColor={disabled ? colors.LIGHT_GRAY_2:colors.DARK_GRAY}
                    selectedButtonColor={disabled ? colors.MAROON:colors.DARK_GRAY}
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