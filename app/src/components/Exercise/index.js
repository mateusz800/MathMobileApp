import React, { useRef, useState } from 'react';
import { View, Button } from 'react-native';
import PropTypes from 'prop-types';


import ClosedEndedQuestion from './ClosedEndedQuestion';
import { colors } from '../../constants'
import StatusBar from '../MessageBar';

const exerciseType = {
    CLOSED_ENDED: 0,
    OPEN: 1
}




const Exercise = ({ exercise, last, nextFunc }) => {
    const [answered, setAnswered] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState(-1);
    const [statusMessage, setStatusMessage] = useState(null);
    const type = exercise.answers.length > 1 ? exerciseType.CLOSED_ENDED : exerciseType.OPEN;
    const checkAnswer = () => {
        if (currentAnswer != -1) {
            setAnswered(true);
            if (currentAnswer == exercise.correctAnswer) {
                setStatusMessage('✓ Poprawna odpowiedź');
                // TODO: save in db
            }
            else {
                setStatusMessage('✗ Zła odpowiedź');
                // TODO: save in db
            }
            setCurrentAnswer(-1);
        }
    };
    return (
        <View>
            {answered && <StatusBar message={statusMessage} />}
            {type == exerciseType.CLOSED_ENDED &&
                <ClosedEndedQuestion exercise={exercise} setMarked={setCurrentAnswer} disabled={answered ? true : false}>
                    <Button
                        title={answered ? (last? 'Zakończ':'Następne') : 'Sprawdz odpowiedz'}
                        color={colors.MAROON} onPress={answered ? ()=>{setAnswered(false);nextFunc();}:checkAnswer}
                        disabled={currentAnswer == -1 && !answered ? true : false}
                    />
                    <Button title='Zobacz rozwiązanie' color={colors.LIGHT_GRAY_2} />
                    {/* TODO: onPress show explanation */}
                </ClosedEndedQuestion>
            }
            {/* TODO: hidden explanation */}
        </View>
    )
}

Exercise.propTypes = {
    exercise: PropTypes.object,
    last: PropTypes.bool
}
export default Exercise;