import axios from 'axios';

import { config } from '../constants'

import { AuthSchema, CourseSchema, ExerciseSchema } from './schemas';

const realm = new Realm({ schema: [AuthSchema] });

export const authenticate = (email, password) => {
    return axios({
        method: 'POST',
        url: `${config.API_URL}/login`,
        data: {
            'login': email,
            'password': password
        }
    }).then(response => {
        updateJWT(response.headers.jwt);
        return true;
    }).catch(error => {
        return false;
    });
};

const getAuthObject = () => {
    return realm.objects('Auth')[0];



}


const updateJWT = (jwt) => {
    console.log("before");
    let auth = getAuthObject();
    console.log("update");
    console.log(auth);
    realm.write(() => {
        auth.jwt = jwt;
    });
}

