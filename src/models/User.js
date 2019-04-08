class User {
    constructor(id, firstName, lastName, biography, job, image, comments, posts) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.name = `${firstName} ${lastName}`
        this.biography = biography
        this.job = job
        this.image = image
        this.comments = comments
        this.posts = posts
    }
}

export default User