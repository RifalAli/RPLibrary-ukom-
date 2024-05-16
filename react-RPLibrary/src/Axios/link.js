import axios from 'axios';

const url = 'http://127.0.0.1:8000/api';

export const link = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})