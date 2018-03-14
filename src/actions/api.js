import axios from 'axios';
import { constants } from '../constants/constants';

export const api = axios.create({
    baseUrl: constants.baseUrl,
    headers: {
        'Content-Type': 'application/json'
    },
    json: true
});
