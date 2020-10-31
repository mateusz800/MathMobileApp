import axios from 'axios';

import { config } from '../constants'
import { realm } from "./index"

export const authenticate = ({email, password}) => {
    axios({
        method:'POST',
        url: `${config.API_URL}/login`,
        data: {
            'login': email,
            'password': password
        }
    }).then(response => {
        console.log(response);
    })
}