import axios from 'axios';
import Realm from 'realm';

import { config } from '../constants'
import { authenticate, getCredentails, getJWT } from './auth';
import { saveCourseExercisesInDevice } from './exercises';
import { CourseSchema, StartedCoursesSchema } from './schemas';



/**
 * 
 * @param {*} setState - function that sets courses state
 */

export const getCourses = (setState) => {
    return getJWT().then((jwt) => {
        return axios({
            method: 'GET',
            url: `${config.API_URL}/courses`,
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
            .then(response => {
                setState(response.data.content);
            })
            .catch(error => {
                if (error.response && error.response.status == 401) {
                    getCredentails().then(credentials => {
                        authenticate(credentials.email, credentials.password).then(() => {
                            getCourses(setState);
                        });
                    })
                }
                else {
                    getOfflineCourses(setState);
                }
            });
    });
};


export const getOfflineCourses = (setState) => {
    Realm.open({ schema: [CourseSchema] }).then(realm => {
        setState(realm.objects('Course'));
    });
}




export const updateCourseLastAccessDate = (courseId) => {
    let date = new Date(Date.now());
    Realm.open({ schema: [StartedCoursesSchema] }).then(realm => {
        let record = realm.objectForPrimaryKey('StartedCourses', courseId);
        realm.write(() => {
            if (record != undefined) {
                record.date_last_learning = date;
            }
            else {
                realm.create('StartedCourses', {
                    course_id: courseId,
                    date_last_learning: date
                });
            }
        });
    });
};

const getCourseById = async (id, setState) => {

    return getCourseByIdFromApi(id).then(response => {
        console.log("Ok");
        setState(response);
        return response
    }).catch(error => {
        if (error.response && error.response.status == 401) {
            getCredentails().then(credentials => {
                authenticate(credentials.email, credentials.password).then(() => {
                    getCourseById(id, setState);
                });
            })
        }
        else {
            console.log(error);
            if (setState) {
                getOfflineCourseById(id, setState);
            }
        }
    });
}

const getCourseByIdFromApi = (id) => {
    return getJWT().then(jwt => {
        return axios({
            method: 'GET',
            url: `${config.API_URL}/courses/${id}`,
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        }).then(response => {
            return response.data;
        });
    })

}

const getOfflineCourseById = (id, setState) => {
    Realm.open({ schema: [CourseSchema] }).then(realm => {
        setState(realm.objectForPrimaryKey('Course', id));
    });
}

export const getLastAccessedCourse = (setCourse) => {
    Realm.open({ schema: [StartedCoursesSchema, CourseSchema] }).then(realm => {
        const courses = realm.objects('StartedCourses').sorted('date_last_learning', true);
        if (courses.length > 0) {
            const courseId = courses[0].course_id;
            getCourseById(courseId, setCourse);
        }
    });
}

export const getLastAccessedCourses = async (setCourses) => {
    let array = [];
    Realm.open({ schema: [StartedCoursesSchema, CourseSchema] }).then(realm => {
        const courses = realm.objects('StartedCourses').sorted('date_last_learning', true);
        if (courses) {
            courses.map(course => {
                const object = getOfflineCourseById(course.course_id, setCourses)
                if (object) {
                    array.push(object);
                }
            });
        }
        if (array.length > 0) {
            setCourses(array);
        }
    });

}


export const saveCourseInDevice = async (courseObj) => {
    // TODO: save and get saved exercises in device
    // TODO: save course image in device
    Realm.open({ schema: [CourseSchema] }).then(realm => {
        let course = realm.objectForPrimaryKey('Course', courseObj.id);
        if (course) {
            // object already exists - update
            realm.write(() => {
                course.name = courseObj.name;
                course.desc = courseObj.desc;
                course.image = courseObj.image;
            })
        } else {
            realm.write(() => {
                course = realm.create('Course', {
                    id: courseObj.id,
                    name: courseObj.name,
                    desc: courseObj.desc,
                    image: courseObj.image || "",
                });
            });
        }
        saveCourseExercisesInDevice(course);
    });

}



