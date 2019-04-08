class Post {
    constructor(id, userId, type) {
        this.id = id;
        this.userId = userId;
        this.type = type;
    }

    isVideo() {
        return this.type === 'video'
    }

    isPicture() {
        return this.type === 'image'
    }

    isText() {
        return this.type === 'text'
    }
}

class VideoPost extends Post {
    constructor(id, userId, type, videoUrl) {
        super(id, userId, type)
        this.videoUrl = videoUrl;
    }
}

class ImagePost extends Post {
    constructor(id, userId, type, imageUrl) {
        super(id, userId, type)
        this.imageUrl = imageUrl;
    }
}

class TextPost extends Post {
    constructor(id, userId, type, text) {
        super(id, userId, type)
        this.text = text;
    }
}

export {
    VideoPost,
    ImagePost,
    TextPost
}