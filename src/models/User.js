class User {
    constructor(id, avatarUrl, name, about, comments, posts) {
        this.id = id;
        this.avatarUrl = avatarUrl;
        this.firstName = name.first;
        this.lastName = name.last;
        this.biography = about;
        this.comments = comments;
        this.posts = posts
    }
}

export {
    User
}
