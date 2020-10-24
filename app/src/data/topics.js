import axios from 'axios';

import {realm} from './index';
import {config} from '../constants'

/**
 * 
 * @param {*} setState - function that sets topics state
 */
export const getTopics = (setState) => {
    return axios.get(`${config.API_URL}/topics`)
    .then(response => {
        setState(response.data.content);
    })
    .catch(error => {
        setState(getOfflineTopics());
    });
};


export const getOfflineTopics = () => {
    return realm.objects('Topic');
}