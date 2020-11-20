import axios from 'axios';
import Realm from 'realm';
import { config } from '../constants'

import { AuthSchema } from './schemas';



export const authenticate = (email, password) => {
    return axios({
        method: 'POST',
        url: `${config.API_URL}/login`,
        headers: {
            "Content-type": "application/json"
        },
        data: {
            'login': email,
            'password': password
        }
    }).then(response => {
        updateCredentials(email, password);
        updateJWT(response.headers.jwt);
        return true;
    }).catch(error => {
        console.log(error);
        return false;
    });
};

export const register = (email, password) => {
    return axios({
        method: 'POST',
        url: `${config.API_URL}/register`,
        data: {
            'email': email,
            'password': password
        }
    }).then(response => {
        return true;
    }).catch(error => {
        return false;
    });
};

export const logout = () => {
    return Realm.open({ schema: [AuthSchema] }).then(realm => {
        realm.write(() => {
            let auth = realm.objects('Auth')[0];
            auth.authenticated = false;
            auth.jwt = "";
        });
    });


};

export const getJWT = () => {
    return Realm.open({ schema: [AuthSchema] }).then(realm => {
        let auth = realm.objects('Auth')[0];
        if (auth) {
            return auth.jwt;
        }
        return null;
    });


};

export const isAuthenticated = async () => {
    return Realm.open({ schema: [AuthSchema] }).then(realm => {
        let auth = realm.objects('Auth')[0];
        if (!auth) {
            return false;
        }
        return auth.authenticated;
    });


}

export const getCredentails = () => {
    return Realm.open({ schema: [AuthSchema] }).then(realm => {
        let auth = realm.objects('Auth')[0];
        return { email: auth.email, password: auth.password };
    });


}

const getAuthObject = () => {
    return Realm.open({ schema: [AuthSchema] }).then(realm => {
        return realm.objects('Auth')[0];
    });

}


const updateJWT = (jwt) => {
    Realm.open({ schema: [AuthSchema] }).then(realm => {
        realm.write(() => {
            let auth = realm.objects('Auth')[0];
            auth.jwt = jwt;
            auth.authenticated = true;


        });
    });
}

const updateCredentials = async (email, password) => {
    Realm.open({ schema: [AuthSchema] }).then(realm => {
        realm.write(() => {
            let auth = realm.objects('Auth')[0];
            auth.email = email;
            auth.password = password;

        });
    });
}

