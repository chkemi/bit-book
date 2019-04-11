import { Comment } from "../models/Comment";
import { getToken } from "./Users";

const fetchCommentsForSinglePost = (id) => {
    return fetch(`https://book-api.hypetech.xyz/v1/posts/${id}/comments`, {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V'
        }
    })
        .then(res => res.json())
        .then((comments) => {
            return comments.map((comment) => {
                return new Comment(comment.id, comment.postId, comment.userId, comment.body)
            })
        })
}

const postComment = (data) => {
    return fetch('https://book-api.hypetech.xyz/v1/comments', {
        method: 'POST',
        headers: {
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            console.log(res);
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        })
        .then(comment => new Comment(comment.sid, comment.postId, comment.userId, comment.body))
}

export {
    fetchCommentsForSinglePost,
    postComment,
}