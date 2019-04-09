import { Comment } from "../models/Comment";

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
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res;
        })
        .then(comment => new Comment(comment.sid, comment.postId, comment.userId, comment.body))
}

export {
    fetchCommentsForSinglePost,
    postComment,
}