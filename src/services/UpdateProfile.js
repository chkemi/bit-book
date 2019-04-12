import { getToken } from "./Users";

const updateProfile = (userId, body) => {
    return fetch((`http://book-api.hypetech.xyz/v1/users/${userId}`, {
        method: 'PATCH',
        headers: {
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': `Bearer + ${getToken()}`
        },
        body: JSON.stringify(body)
    }))
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then((result) => {
            console.log(result);
            return result
        });
}

export default updateProfile;