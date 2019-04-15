class User {
    constructor(id, sid, email, avatarUrl, name, about, comments, posts, createdAt) {

        const date = new Date(createdAt)

        this.id = id;
        this.sid = sid;
        this.email = email;
        this.avatarUrl = avatarUrl;
        this.firstName = name.first;
        this.lastName = name.last;
        this.biography = about;
        this.comments = comments;
        this.posts = posts;
        this.createdAt = date.toLocaleDateString();
    }
}

export {
    User
}
