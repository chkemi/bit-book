const updateProfile = (userId) => {
    return fetch((`https://book-api.hypetech.xyz/v1/users/${userId}?_embed[]=posts&_embed[]=comments`, {
        method: 'PATCH',
        headers: {
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json'
        },
        body: {

        }
    }))
}