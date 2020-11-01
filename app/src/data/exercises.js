import axios from 'axios';

import { realm } from './index';
import { config } from '../constants'
import { ExerciseSchema, AnswerSchema, CourseSchema } from './schemas';
import { getJWT } from './auth';


export const getOfflineCourseExercises = (courseName, amount) => {
    return realm.objects('Exercise').filtered(`course.name = '${courseName}' && solved=false`).slice(0, amount)[0];
}

export const getCourseExercises = (setState, courseName, amount) => {

    return axios({
        url: `${config.API_URL}/exercises?course=${courseName}&pageSize=${amount}`,
        headers: {
            Authorization: `Bearer ${getJWT()}`
        }
    }).then(response => {
        const exercises = response.data.content.map(exercise => {
            return {
                id: exercise.id,
                course: exercise.course,
                question: exercise.question,
                correctAnswer: exercise.correctAnswers[0],
                answers: exercise.otherAnswers.concat(exercise.correctAnswers[0])
            }
        });
        setState(exercises);
    })
        .catch(error => {
            setState(getOfflineCourseExercises(courseName, amount));
        });
};




export const saveAnswer = (exerciseId, solved) => {

    Realm.open({ schema: [AnswerSchema, ExerciseSchema, CourseSchema] }).then(realm => {
        realm.write(() => {
            let answerObj;
            try {
                answerObj = realm.objectForPrimaryKey('Answer', exerciseId);
                //answerObj = realm.objects("Answer").find(`id = ${exerciseId}`)
            }
            catch (e) {
                answerObj = null
            }
            if (!answerObj) {
                // create new one
                realm.create('Answer', {
                    exercise_id: exerciseId,
                    solved: solved,
                    answer_date: Date.now(),
                    incorect_answer_count: solved ? 0 : 1
                });
            }
            else {
                answerObj.incorect_answer_count += 1;
                answerObj.answer_date = Date.now();
            }
        });
    });
};

export const clearAllAnswers = () => {
    Realm.open({ schema: [AnswerSchema, ExerciseSchema, courseSchema] }).then(realm => {
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