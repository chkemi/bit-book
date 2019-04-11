import { User } from '../models/User'
import jwtDecode from "jwt-decode";

const loggedIn = () => {
    return localStorage.getItem('user') ? true : false;
}

const getDecodedId = () => {
    const decoded = jwtDecode(localStorage.getItem('user'))
    return decoded.id;
}

const getToken = () => {
    return localStorage.getItem('user');
}

const fetchUserById = (userId) => {

    return fetch(`https://book-api.hypetech.xyz/v1/users/${userId}?_embed[]=posts&_embed[]=comments`, {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'
        }
    }).then(result => {
        return result.json()
    }).then(user => {
        if (user.about) {
            return new User(user.id, user.avatarUrl, user.name, user.about.bio, user.comments, user.posts, user.createdAt)
        } else {
            return new User(user.id, 'http://via.placeholder.com/125', user.name, 'No bio', [], [], user.createdAt)
        }
    })
}

const fetchLoggedInUser = () => {
    return fetch(`https://book-api.hypetech.xyz/v1/users/${getDecodedId()}?_embed[]=posts&_embed[]=comments`, {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
    }).then(result => {
        return result.json()
    }).then(user => {
        return new User(user.id, 'http://via.placeholder.com/125', user.name, 'No bio', user.comments, user.posts)
    }).catch((err) => {
        return new User(0, 'http://via.placeholder.com/125', { first: 'anonymous', last: 'anonymous' }, ['no user'], 0, 0)
    });
}

const fetchUsers = () => {
    return fetch('https://book-api.hypetech.xyz/v1/users', {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V'
        }
    })
        .then(res => res.json())
        .then(users => {
            return users.map(user => {
                if (user.about) {
                    return new User(user.id, user.avatarUrl, user.name, user.about.bio, user.comments, user.posts, user.createdAt)
                } else {
                    return new User(user.id, 'http://via.placeholder.com/125', user.name, 'No bio', [], [], user.createdAt)
                }
            })
        })
}

export {
    fetchUserById,
    fetchUsers,
    fetchLoggedInUser,
}