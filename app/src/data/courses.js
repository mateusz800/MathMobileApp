import axios from 'axios';

import { realm } from './index';
import { config } from '../constants'
import { authenticate, getCredentails, getJWT } from './auth';

/**
 * 
 * @param {*} setState - function that sets courses state
 */
export const getCourses = (setState) => {
    console.log(getJWT());
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
                authenticate(getCredentails());
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