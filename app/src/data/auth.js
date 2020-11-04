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
        updateCredentials(email, password);
        return true;
    }).catch(error => {
        return false;
    });
};

export const register = (email, password) => {
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

export const logout =  () => {
    let auth = getAuthObject();
    realm.write(() => {
        auth.authenticated = false;
        auth.jwt = "";
    });
   
};

export const getJWT = () => {
    const auth = getAuthObject();
    if(auth){
        return auth.jwt;
    }
    return null;
};

export const isAuthenticated = () => {
    const auth = getAuthObject();
    if(!auth){
        return false;
    }
    return getAuthObject().authenticated;
}

export const getCredentails = () => {
    const auth = getAuthObject();
    return auth.email, auth.email;
}

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

const updateCredentials = (email, password) => {
    let auth = getAuthObject();
    realm.write(() => {
        auth.email = email;
        auth.password = password;
    });
}

