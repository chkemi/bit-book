import { User } from '../models/User'
import jwtDecode from "jwt-decode";

const getDecodedId = () => {
    const decoded = jwtDecode(localStorage.getItem('user'))
    return decoded.id;
}

const getToken = () => localStorage.getItem('user');

const fetchUserById = (userId) => {
    return fetch(`https://book-api.hypetech.xyz/v1/users/${userId}?_embed[]=posts&_embed[]=comments`, {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })
        .then(result => result.json())
        .then(user => user.about
            ? new User(user.id, user.avatarUrl, user.name, user.about.bio, user.comments, user.posts, user.createdAt)
            : new User(user.id, 'http://via.placeholder.com/125', user.name, 'No bio', [], [], user.createdAt)
        )
}

const fetchLoggedInUser = () => {
    return fetch(`https://book-api.hypetech.xyz/v1/users/${getDecodedId()}?_embed[]=posts&_embed[]=comments`, {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    })
        .then(result => result.json())
        .then(user => new User(user.id, 'http://via.placeholder.com/125', user.name, 'No bio', user.comments, user.posts))
        .catch(err => new User(0, 'http://via.placeholder.com/125', { first: 'anonymous', last: 'anonymous' }, ['no user'], 0, 0));
}

const fetchUsers = () => {
    return fetch('https://book-api.hypetech.xyz/v1/users', {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V',
            'Authorization': `Bearer ${getToken()}`
        }
    })
        .then(res => res.json())
        .then(users => users.map(user => user.about
            ? new User(user.id, user.avatarUrl, user.name, user.about.bio, user.comments, user.posts, user.createdAt)
            : new User(user.id, 'http://via.placeholder.com/125', user.name, 'No bio', [], [], user.createdAt))
        )
}

export {
    fetchUserById,
    fetchUsers,
    fetchLoggedInUser,
    getDecodedId,
    getToken,
}