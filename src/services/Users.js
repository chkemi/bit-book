import User from '../models/User'

const fetchUser = (userId) => {
    let request = fetch(`https://book-api.hypetech.xyz/v1/users/${userId}?_embed[]=posts&_embed[]=comments`, {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'
        }
    }).then(result => {
        return result.json()
    }).then(user => {
        return new User(user.id, user.name.first, user.name.last, user.about.bio, user.about.job, user.avatarUrl, user.comments, user.posts)
    })

    return request;
}

export default fetchUser