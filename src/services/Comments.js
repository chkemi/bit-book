import { Comment } from "../models/Comment";
import { getToken } from "./Users";

const fetchCommentsByPostId = (id) => {
    return fetch(`https://book-api.hypetech.xyz/v1/comments?postId=${id}&_expand=user`, {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(comments => comments.map(comment => new Comment(comment.id, comment.postId, comment.userId, comment.body, comment.user.avatarUrl)))
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
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res.json();
        })
        .then(comment => new Comment(comment.sid, comment.postId, comment.userId, comment.body))
}

export {
    fetchCommentsByPostId,
    postComment,
}