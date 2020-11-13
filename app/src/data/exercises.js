import axios from 'axios';

import { config } from '../constants'
import { ExerciseSchema, AnswerSchema, CourseSchema, StartedCoursesSchema } from './schemas';
import { getJWT, authenticate, getCredentails } from './auth';
import { getCourseByIdFromApi } from './courses';

const realm = new Realm({ schema: [ExerciseSchema, CourseSchema] });

export const getOfflineCourseExercises = (courseId, amount, solved) => {
    return realm.objects('Exercise').filtered(`course.id = '${courseId}' && solved=${solved}`).slice(0, amount);
}

const getAllCourseExercisesFromApi = (courseId) => {
    // TODO: check all pages
    return axios({
        url: `${config.API_URL}/exercises?courseId=${courseId}`,
        headers: {
            Authorization: `Bearer ${getJWT()}`
        }
    }).then(response => {
        return response.data.content.map(exercise => {
            return {
                id: exercise.id,
                course: exercise.course,
                question: exercise.question,
                correctAnswer: exercise.correctAnswers[0],
                solution: exercise.solution,
                answers: exercise.otherAnswers.concat(exercise.correctAnswers[0]),
            }
        });
    }).catch(error => console.log(error));
}

export let getCourseExercises = (setState, courseId, amount, solved) => {
    return axios({
        url: `${config.API_URL}/exercises?courseId=${courseId}&pageSize=${amount}&isSolved=${solved}`,
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
                solution: exercise.solution,
                answers: exercise.otherAnswers.concat(exercise.correctAnswers[0]),
            }
        });
        setState(exercises);
    })
        .catch(error => {
            if (error.response && error.response.status == 401) {
                const credentials = getCredentails();
                authenticate(credentials.email, credentials.password);
                getCourseExercises = (setState, courseId, amount, solved);
            }
            else {
                setState(getOfflineCourseExercises(courseId, amount, solved));
            }
        });
};





export const saveAnswer = (exerciseId, solved) => {
    axios({
        method: 'POST',
        url: `${config.API_URL}/exercise/${exerciseId}/answer`,
        headers: {
            Authorization: `Bearer ${getJWT()}`,
        },
        data: {
            "isCorrect": solved
        }
    }).then(response => {
        console.log("Saving answer in API");
    }).catch(error => {
        console.log(error);
        saveAnswerOnline(exerciseId, solved);
    })

};

const saveAnswerOnline = (exerciseId, solved) => {
    Realm.open({ schema: [AnswerSchema] }).then(realm => {
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
};

export const saveCourseExercisesInDevice = async (course) => {
    // TODO: check all pages
    const exercises = await getAllCourseExercisesFromApi(course.id);
    
    realm.write(() => {
        exercises.map(e => {
            realm.create('Exercise', {
                id:e.id,
                course:realm.objectForPrimaryKey('Course', course.id),
                question:e.question,
                correctAnswer:e.correctAnswer,
                answers:e.answers,
                solved:e.solved
            });
        });
    });
    
}

