import { getToken } from "../services/Users";
import history from './history';

const apiKey = 'B1tPr0d';
const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoic2Fwa2VAZ21haWwuY29tIiwiaWF0IjoxNTU1NDI4MDA4LCJleHAiOjE1NTU0NDYwMDh9.1SWfwZk2gqR7piSk22SUbL_L9izwUGr37b81grrHZLs';
const BASE_URL = "https://book-api.hypetech.xyz/v1";

class API {

    get(path) {
        return fetch(`${BASE_URL}${path}`, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.error && data.error.toLowerCase().includes('token')) {
                    localStorage.removeItem('user');
                    history.push('/');
                    return;
                }
                return data;
            })
    }

    getNum(path) {
        return fetch(`${BASE_URL}${path}`, {
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            }
        })
            .then(res => res.headers.get('x-total-count'))
    }

    post(data, path) {
        return fetch(`${BASE_URL}${path}`, {
            method: 'POST',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }

                return res.json();
            })
            .then(data => {
                if (data.error && data.error.toLowerCase().includes('token')) {
                    localStorage.removeItem('user');
                    history.push('/');
                    return;
                }
                return data;
            })
    }

    postReg(data, path) {
        return fetch(`${BASE_URL}${path}`, {
            method: 'POST',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }

                return res.json();
            })
            .then(data => {
                if (data.error && data.error.toLowerCase().includes('token')) {
                    localStorage.removeItem('user');
                    history.push('/');
                    return;
                }
                return data;
            })
    }

    delete(path) {
        return fetch(`${BASE_URL}${path}`, {
            method: 'DELETE',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.error && data.error.toLowerCase().includes('token')) {
                    localStorage.removeItem('user');
                    history.push('/');
                    return;
                }
                return data;
            })
    }
}

const api = new API();

export {
    apiKey,
    expiredToken,
    api
}