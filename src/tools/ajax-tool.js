import axios from 'axios';
import { BASE_URL } from '../constants/app';

export const api = axios.create({
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    json: true,
});
