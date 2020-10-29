import axios from 'axios';

import { realm } from './index';
import { config } from '../constants'
import { ExerciseSchema, AnswerSchema, TopicSchema } from './schemas';


export const getOfflineTopicExercises = (topicName, amount) => {
    return realm.objects('Exercise').filtered(`topic.name = '${topicName}' && solved=false`).slice(0, amount)[0];
}

export const getTopicExercises = (setState, topicName, amount) => {

    return axios.get(`${config.API_URL}/exercises?topic=${topicName}&pageSize=${amount}`)
        .then(response => {
            console.log(response.data.content)
            const topics = response.data.content.map(topic => {
                return {
                    id: 1, // TODO
                    topic: topic.topic,
                    question: topic.question,
                    correctAnswer: topic.correctAnswer,
                    answers: topic.otherAnswers.concat(topic.correctAnswer)
                }
            });
            console.log(topics)
            setState(topics);
        })
        .catch(error => {
            setState(getOfflineTopicExercises(topicName, amount));
        });
};




export const saveAnswer = (exerciseId, solved) => {
    let answerObj;
    try {
        answerObj = realm.objectForPrimaryKey('Answer', exerciseId);
    }
    catch (e) {
        answerObj = null;
    }

    Realm.open({ schema: [AnswerSchema, ExerciseSchema, TopicSchema] }).then(realm => {
        if (solved) {
            realm.write(() => {
                realm.objectForPrimaryKey('Exercise', exerciseId).solved = true;
            });
        }
        if (!answerObj) {
            // create new one
            realm.write(() => {
                let answer = realm.create('Answer', {
                    exercise_id: exerciseId,
                    solved: solved,
                    answer_date: Date.now(),
                });
            });
        }
        else {
            // update
            realm.write(() => {
                answerObj.incorect_answer_count += 1;
                answerObj.answer_date = Date.now();
            });
        }
    });
};

export const clearAllAnswers = () => {
    Realm.open({ schema: [AnswerSchema, ExerciseSchema, TopicSchema] }).then(realm => {
        realm.write(() => {
            realm.objects('Answer').map(obj => {
                if (obj != undefined) {
                    realm.delete(obj);
                }
            });
            realm.objects('Exercise').map(obj => { obj.solved = false; });
        })
    });
}