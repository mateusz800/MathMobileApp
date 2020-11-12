import axios from 'axios';
import Realm from 'realm';

import { config } from '../constants'
import { authenticate, getCredentails, getJWT } from './auth';
import { saveCourseExercisesInDevice } from './exercises';
import { CourseSchema, StartedCoursesSchema } from './schemas';


const realm = new Realm({ schema: [StartedCoursesSchema, CourseSchema] });

/**
 * 
 * @param {*} setState - function that sets courses state
 */
export const getCourses = (setState) => {
    return axios({
        method: 'GET',
        url: `${config.API_URL}/courses`,
        headers: {
            Authorization: `Bearer ${getJWT()}`
        }
    })
        .then(response => {
            setState(response.data.content);
        })
        .catch(error => {
            if (error.response && error.response.status == 401) {
                const credentials = getCredentails();
                authenticate(credentials.email, credentials.password);
                getCourses(setState);
            }
            else {
                setState(getOfflineCourses());
            }
        });
};


export const getOfflineCourses = () => {
    return realm.objects('Course');
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
    getCourseByIdFromApi(id).then(response => {
        setState(response.data);
    }).catch(error => {
        if (error.response && error.response.status == 401) {
            const credentials = getCredentails();
            authenticate(credentials.email, credentials.password);
            getCourseById(id);
        }
        else {
            if (setState) {
                setState(getOfflineCourseById(id));
            }
        }
    });
}

const getCourseByIdFromApi = (id) => {
    return axios({
        method: 'GET',
        url: `${config.API_URL}/courses/${id}`,
        headers: {
            Authorization: `Bearer ${getJWT()}`
        }
    }).then(response => {
        return response.data;
    });
}

const getOfflineCourseById = (id) => {
    return realm.objectForPrimaryKey('Course', id);
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

export const saveCourseInDevice = async (courseObj) => {
    // TODO: save and get saved exercises in device
    // TODO: save course image in device
    console.log("beggining");
    console.log(courseObj);
    let course = realm.objectForPrimaryKey('Course', courseObj.id);
    if (course) {
        // object already exists - update
        realm.write(() => {
            course.name = courseObj.name;
            course.desc = courseObj.desc;
            course.image = courseObj.image;
        })
    } else{
        realm.write(() => {
            course = realm.create('Course', {
                id: courseObj.id,
                name: courseObj.name,
                desc: courseObj.desc,
                image: courseObj.image, 
            });
        });
    }

    console.log();
    saveCourseExercisesInDevice(course);
    console.log(course);







    /*
        let course;
        realm.write(() => {
            try {
                console.log("id : " + courseObj.id);
                console.log(realm.objects('Course').find(c => c.id = courseObj.id));
                
                
            }
            catch (error) {
                // create
                console.log(error);
                course = realm.create('Course', {
                    id: courseObj.id,
                    name: courseObj.name,
                    desc: courseObj.desc,
                    image: courseObj.image, // TODO
                });
            }
            saveCourseExercisesInDevice(course);
            
        });
        */
}



