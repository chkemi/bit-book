import { User } from '../models/User'

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
        return new User(user.id, user.avatarUrl, user.name, user.about.bio, user.comments, user.posts)
    }).catch((err) => {
        return new User(0, 'http://via.placeholder.com/150', { first: 'anonymous', last: 'anonymous' }, { bio: 'no user' }, 0, 0)
    });
}

export {
    fetchUserById,
}