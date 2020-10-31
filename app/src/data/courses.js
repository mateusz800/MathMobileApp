import axios from 'axios';

import {realm} from './index';
import {config} from '../constants'
import { getJWT } from './auth';

/**
 * 
 * @param {*} setState - function that sets courses state
 */
export const getCourses = (setState) => {
    console.log(getJWT());
    return axios({
        method:'GET',
        url:`${config.API_URL}/courses`,
        headers:{
            Authorization: `Bearer ${getJWT()}`
        }
    })
    .then(response => {
        setState(response.data.content);
    })
    .catch(error => {
        console.log("Get courses error");
        console.log(error);
        setState(getOfflineCourses());
    });
};


export const getOfflineCourses = () => {
    return realm.objects('Course');
}