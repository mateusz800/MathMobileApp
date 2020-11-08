import axios from 'axios';
import Realm from 'realm';

import { config } from '../constants'
import { authenticate, getCredentails, getJWT } from './auth';
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
    return axios({
        method: 'GET',
        url: `${config.API_URL}/courses/${id}`,
        headers: {
            Authorization: `Bearer ${getJWT()}`
        }
    }).then(response => {
        setState(response.data);
    }).catch(error => {
        if (error.response && error.response.status == 401) {
            const credentials = getCredentails();
            authenticate(credentials.email, credentials.password);
            getCourseById(id);
        }
        else {
            if(setState){
                setState(getOfflineCourseById(id));
            }
           
        }
    });
}

const getOfflineCourseById = (id) => {
    return realm.objectForPrimaryKey('Course', id);
}

export const getLastAccessedCourse =  (setCourse) => {
    Realm.open({ schema: [StartedCoursesSchema, CourseSchema] }).then(realm => {
        const courseId = realm.objects('StartedCourses').sorted('date_last_learning', true)[0].course_id;
        getCourseById(courseId, setCourse);
    });
}

