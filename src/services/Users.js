import { User } from '../models/User';
import jwtDecode from "jwt-decode";
import { api } from '../shared/api';

const getDecodedId = () => {
    const decoded = jwtDecode(localStorage.getItem('user'))
    return decoded.id;
}

const getToken = () => localStorage.getItem('user');

const fetchUserById = (userId) => {
    return api
        .get(`/users/${userId}?_embed[]=posts&_embed[]=comments`)
        .then(user => new User(user)
        )
}

const fetchLoggedInUser = () => {
    return api
        .get(`/users/${getDecodedId()}?_embed[]=posts&_embed[]=comments`)
        .then(user => new User(user))
        .catch(err => console.log(err));
}

const fetchUsers = () => {
    return api
        .get('/users')
        .then(users => users.map(user => new User(user)))
}

export {
    fetchUserById,
    fetchUsers,
    fetchLoggedInUser,
    getDecodedId,
    getToken,
}