class User {
    constructor(id, avatarUrl, name, biography, comments, posts, createdAt) {

        const date = new Date(createdAt)

        this.id = id;
        this.avatarUrl = avatarUrl;
        this.firstName = name.first;
        this.lastName = name.last;
        this.biography = biography;
        this.comments = comments;
        this.posts = posts;
        this.createdAt = date.toLocaleDateString();
    }
}

export {
    User
}
