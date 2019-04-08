import { User } from "../models/User";

const fetchUserById = (id) => {

    return fetch(`https://book-api.hypetech.xyz/v1/users/${id}`, {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V'
        }
    })
        .then((res) => {
            return res.json()
        })
        .then((user) => {
            return new User(user.id, user.avatarUrl, user.name)
        }).catch((err) => {
            return new User(0, 'http://via.placeholder.com/150', { first: 'anonymous', last: 'anonymous' })
        });
}

export {
    fetchUserById,
}