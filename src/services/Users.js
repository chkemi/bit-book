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
        if (user.about) {
            return new User(user.id, user.avatarUrl, user.name, user.about.bio, user.comments, user.posts, user.createdAt)
        } else {
            return new User(user.id, 'http://via.placeholder.com/150', user.name, 'No bio', [], [], user.createdAt)
        }
    })
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
                    return new User(user.id, 'http://via.placeholder.com/150', user.name, 'No bio', [], [], user.createdAt)
                }
            })
        })
}

export {
    fetchUserById,
    fetchUsers,
}