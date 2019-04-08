class User {
    constructor(id, avatarUrl, name) {
        this.id = id;
        this.avatarUrl = avatarUrl;
        this.firstName = name.first;
        this.lastName = name.last;
    }
}

export {
    User
}