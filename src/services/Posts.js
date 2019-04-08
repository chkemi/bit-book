import { TextPost, ImagePost, VideoPost } from "../models/Post";

const fetchPosts = () => {
    return fetch('https://book-api.hypetech.xyz/v1/posts', {
        method: 'GET',
        headers: {
            'x-api-key': 'B1tD3V',
        }
    })
        .then((res) => {
            return res.json();
        })
        .then((posts) => {
            return posts.map((post) => {
                if (post.type === 'text') {
                    return new TextPost(post.id, post.userId, post.type, post.text)
                } else if (post.type === 'image') {
                    return new ImagePost(post.id, post.userId, post.type, post.imageUrl)
                } else if (post.type === 'video') {
                    return new VideoPost(post.id, post.userId, post.type, post.videoUrl)
                }
                return null
            });
        })
}

export {
    fetchPosts
}