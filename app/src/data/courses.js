import axios from 'axios';

import {realm} from './index';
import {config} from '../constants'

/**
 * 
 * @param {*} setState - function that sets courses state
 */
export const getCourses = (setState) => {
    return axios.get(`${config.API_URL}/courses`)
    .then(response => {
        setState(response.data.content);
    })
    .catch(error => {
        setState(getOfflineCourses());
    });
};


export const getOfflineCourses = () => {
    return realm.objects('course');
}