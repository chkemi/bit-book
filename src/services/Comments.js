import { Comment } from "../models/Comment";
import { api } from "../shared/api";

const fetchCommentsByPostId = (id) => {
    return api
        .get(`/comments?postId=${id}&_expand=user`)
        .then(comments => {
            return comments.map(comment => {
                return !comment.user
                    ? new Comment(comment.id, comment.postId, comment.userId, comment.body, 'http://via.placeholder.com/125')
                    : new Comment(comment.id, comment.postId, comment.userId, comment.body, comment.user.avatarUrl)
            })
        })
}

const postComment = (data) => {
    return api
        .post(data, '/comments')
        .then(comment => new Comment(comment.sid, comment.postId, comment.userId, comment.body))
}

const fetchDeleteComment = (id) => {
    return api
        .delete(`/comments/${id}`)
        .then(res => res)
}

const fetchNumOfComments = (id) => {
    return api
        .getNum(`/comments?postId=${id}&_limit=1`)
}

export {
    fetchCommentsByPostId,
    postComment,
    fetchNumOfComments,
    fetchDeleteComment,
}