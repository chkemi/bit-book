class User {
    constructor(id, avatarUrl, name, biography, comments, posts) {
        this.id = id;
        this.avatarUrl = avatarUrl;
        this.firstName = name.first;
        this.lastName = name.last;
        this.biography = biography;
        this.comments = comments;
        this.posts = posts
    }
}

export {
    User
}
