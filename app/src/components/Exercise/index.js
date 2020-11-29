import React, { useRef, useState } from 'react';
import { View, Button, Text } from 'react-native';
import MathText from 'react-native-math';
import PropTypes from 'prop-types';


import ClosedEndedQuestion from './ClosedEndedQuestion';
import { saveAnswer } from '../../data/exercises';
import { colors } from '../../constants';
import StatusBar from '../MessageBar';
import { ScrollView } from 'react-native-gesture-handler';
import OpenExercise from './OpenExercise';

const exerciseType = {
    CLOSED_ENDED: 0,
    OPEN: 1
}


const Exercise = ({ exercise, last, nextFunc }) => {
    const [answered, setAnswered] = useState(false);
    const [currentAnswer, setCurrentAnswer] = useState(-1);
    const [statusMessage, setStatusMessage] = useState(null);
    const [showSolution, setShowSolution] = useState(false);
    const scroller = useRef();
    const type = exercise.answers.length > 1 ? exerciseType.CLOSED_ENDED : exerciseType.OPEN;
    const checkAnswer = () => {
        if (currentAnswer != -1) {
            setAnswered(true);
            if (currentAnswer == exercise.correctAnswer) {
                setStatusMessage('✓ Poprawna odpowiedź');
                saveAnswer(exercise.id, true);
            }
            else {
                setStatusMessage('✗ Zła odpowiedź');
                saveAnswer(exercise.id, false);

            }

            setCurrentAnswer(-1);

        }
    }

    console.log("show solution: " + showSolution);
    const showExerciseSolution = () => {
        setAnswered(true);
        setShowSolution(true);

        // TODO: doen't work (under)
        scroller.current.scrollTo({ x: 100, y: 100, animated: true });
    };
    return (
        <ScrollView ref={scroller}>
            {answered && <StatusBar message={statusMessage} />}
            {type == exerciseType.CLOSED_ENDED &&
                <ClosedEndedQuestion exercise={exercise} setMarked={setCurrentAnswer} disabled={answered ? true : false}>
                    <Button
                        title={answered ? (last ? 'Zakończ' : 'Następne') : 'Sprawdz odpowiedz'}
                        color={colors.MAROON} onPress={answered ? () => { setAnswered(false); nextFunc(); setShowSolution(false); } : checkAnswer}
                        disabled={currentAnswer == -1 && !answered ? true : false}
                    />
                    {exercise.solution &&
                        <View style={{ marginTop: 25 }}>
                            <Button title='Zobacz rozwiązanie' color={colors.LIGHT_GRAY_2}
                                onPress={showExerciseSolution} />
                        </View>
                    }
                    {showSolution &&
                        <MathText
                            value={exercise.solution}
                            style={{ height: 250, marginTop: 50, backgroundColor: null }}
                            textSize={18} />
                    }

                </ClosedEndedQuestion>
            }
            {type == exerciseType.OPEN &&
                <OpenExercise setAnswer={setCurrentAnswer} exercise={exercise}>
                    <Button
                        title={answered ? (last ? 'Zakończ' : 'Następne') : 'Sprawdz odpowiedz'}
                        color={colors.MAROON} onPress={answered ? () => { setAnswered(false); nextFunc(); setShowSolution(false) } : checkAnswer}
                        disabled={currentAnswer == -1 && !answered ? true : false}
                    />
                    {exercise.solution &&
                        <View style={{ marginTop: 25 }}>
                            <Button title='Zobacz rozwiązanie' color={colors.LIGHT_GRAY_2}
                                onPress={showExerciseSolution} />
                        </View>
                    }
                    {showSolution &&
                        <MathText
                            value={exercise.solution}
                            style={{ height: 250, marginTop: 50, backgroundColor: null }}
                            textSize={18} />
                    }
                </OpenExercise>
            }

        </ScrollView>
    )
}

Exercise.propTypes = {
    exercise: PropTypes.object.isRequired,
    last: PropTypes.bool
}
export default Exercise;