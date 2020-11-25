
import axios from 'axios';

import { config } from '../constants'
import { ExerciseSchema, AnswerSchema, CourseSchema, StartedCoursesSchema } from './schemas';
import { getJWT, authenticate, getCredentails } from './auth';
import { getCourseByIdFromApi } from './courses';


export const getOfflineCourseExercises = (setState, courseId, amount, solved) => {
    Realm.open({ schema: [ExerciseSchema, CourseSchema] }).then(realm => {
        setState(realm.objects('Exercise').filtered(`course.id = '${courseId}' && solved=${solved}`).slice(0, amount));
    });
}

const getAllCourseExercisesFromApi = (courseId) => {
    // TODO: check all pages
    return getJWT().then(jwt => {
        return axios({
            url: `${config.API_URL}/exercises?courseId=${courseId}`,
            headers: {
                Authorization: `Bearer ${jwt}`
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
                    image:exercise.image
                }
            });
        });
    });

}

export let getCourseExercises = (setState, courseId, amount, solved) => {
    getJWT().then(jwt => {
        return axios({
            url: `${config.API_URL}/exercises?courseId=${courseId}&pageSize=${amount}&isSolved=${solved}`,
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }).then(response => {
            const exercises = response.data.content.map(exercise => {
                console.log(exercise);
                return {
                    id: exercise.id,
                    course: exercise.course,
                    question: exercise.question,
                    correctAnswer: exercise.correctAnswers[0],
                    solution: exercise.solution,
                    answers: exercise.otherAnswers.concat(exercise.correctAnswers[0]),
                    image:exercise.image
                }
            });
            console.log(exercises);
            setState(exercises);
        })
            .catch(error => {
                console.log(error);
                if (error.response && error.response.status == 401) {
                    getCredentails().then(credentials => {
                        authenticate(credentials.email, credentials.password).then(() => {
                            getCourseExercises(setState, courseId, amount, solved);
                        })
                    });
                }
                else {
                    getOfflineCourseExercises(setState, courseId, amount, solved);
                }
            });
    })
};





export const saveAnswer = (exerciseId, solved) => {
    getJWT().then(jwt => {
        axios({
            method: 'POST',
            url: `${config.API_URL}/exercise/${exerciseId}/answer`,
            headers: {
                Authorization: `Bearer ${jwt}`,
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
    saveAnswer(exerciseId, solved);
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

    Realm.open({ schema: [ExerciseSchema, CourseSchema] }).then(realm => {

        getAllCourseExercisesFromApi(course.id).then(exercises => {
            realm.write(() => {
                console.log(exercises);
                exercises.map(e => {
                    let oldExercise = realm.objectForPrimaryKey('Exercise', e.id);
                    console.log(oldExercise);
                    if (!oldExercise) {
                        console.log("new exercise");
                        realm.create('Exercise', {
                            id: e.id,
                            course: realm.objectForPrimaryKey('Course', course.id),
                            question: e.question,
                            correctAnswer: e.correctAnswer,
                            answers: e.answers,
                            solved: e.solved
                        });
                    }
                });
            });
        }).catch(error => {
            console.log(error);
            if (error.response && error.response.status == 401) {
                getCredentails().then(credentials => {
                    authenticate(credentials.email, credentials.password).then(() => {
                        alert(":(");
                        saveCourseExercisesInDevice(course);
                    })
                });
            }
            else {
                alert("jesteś offline");
            }
        });

    });

}

