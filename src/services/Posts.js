import { TextPost, ImagePost, VideoPost } from "../models/Post";
import { api } from "../shared/api";

const fetchPosts = (num) => {
    return api
        .get(`/posts?_limit=${num}&_embed=comments`)
        .then(posts => {
            return posts.map((post) => {
                if (post.type === 'text') {
                    return new TextPost(post.id, post.userId, post.type, post.comments, post.text)
                } else if (post.type === 'image') {
                    return new ImagePost(post.id, post.userId, post.type, post.comments, post.imageUrl)
                } else if (post.type === 'video') {
                    return new VideoPost(post.id, post.userId, post.type, post.comments, post.videoUrl)
                }
                return null
            });
        })
}

const fetchSinglePost = (id) => {
    return api
        .get(`/posts/${id}`)
        .then((singlePost) => {
            if (singlePost.type === 'text') {
                return new TextPost(singlePost.id, singlePost.userId, singlePost.type, singlePost.comments, singlePost.text)
            } else if (singlePost.type === 'image') {
                return new ImagePost(singlePost.id, singlePost.userId, singlePost.type, singlePost.comments, singlePost.imageUrl)
            } else if (singlePost.type === 'video') {
                return new VideoPost(singlePost.id, singlePost.userId, singlePost.type, singlePost.comments, singlePost.videoUrl)
            }
            return null
        })
}

const fetchCreatePost = (dataObj) => {
    return api
        .post(dataObj, `/posts`)
        .then(post => post)
}

const fetchDeletePost = (id) => {
    return api
        .delete(`/posts/${id}`)
}

export {
    fetchPosts,
    fetchSinglePost,
    fetchCreatePost,
    fetchDeletePost,
}