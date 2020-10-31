import axios from 'axios';

import { config } from '../constants'

import { AuthSchema } from './schemas';

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

export const register = (email, password) => {
    console.log(email);
    console.log(password);
    return axios({
        method:'POST',
        url:`${config.API_URL}/register`,
        data:{
            'email':email,
            'password':password
        }
    }).then(response => {
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
};

export const getJWT = () => {
    return getAuthObject().jwt;
};

const getAuthObject = () => {
    return realm.objects('Auth')[0];
}


const updateJWT = (jwt) => {
    let auth = getAuthObject();
    realm.write(() => {
        auth.jwt = jwt;
        auth.authenticated = true;
    });
}

