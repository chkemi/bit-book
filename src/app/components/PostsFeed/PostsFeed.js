import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, fetchCreatePost } from '../../../services/Posts';
import FloatingButton from '../FloatingButton';
import CommentsCount from './CommentsCount';

class PostsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            allPosts: true,
            onlyImages: false,
            onlyVideos: false,
            onlyText: false,
            postContent: '',
            imageUrl: '',
            videoUrl: '',
        }

        this.changeInputValues = this.changeInputValues.bind(this);
        this.createTextPost = this.createTextPost.bind(this);
        this.createImagePost = this.createImagePost.bind(this);
        this.createVideoPost = this.createVideoPost.bind(this);

        this.filterText = this.filterText.bind(this);
        this.filterVideos = this.filterVideos.bind(this);
        this.filterImages = this.filterImages.bind(this);
        this.allPosts = this.allPosts.bind(this);
    }

    changeInputValues(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        fetchPosts()
            .then((posts) => {
                const reversedPosts = posts.reverse()
                this.setState({
                    posts: reversedPosts
                })
            })
    }

    createTextPost(e) {
        e.preventDefault()

        const body = {
            sid: Math.random() * 1000000,
            type: 'text',
            text: this.state.postContent,
            isPublic: true
        }

        fetchCreatePost(body)
            .then((post) => {
                console.log(post);
                fetchPosts()
                    .then((posts) => {
                        const reversedPosts = posts.reverse()
                        this.setState({
                            posts: reversedPosts
                        })
                    })
            })
    }

    createImagePost(e) {
        e.preventDefault()

        const body = {
            sid: Math.random() * 1000000,
            type: 'image',
            imageUrl: this.state.imageUrl,
            isPublic: true
        }

        fetchCreatePost(body)
            .then((post) => {
                console.log(post);
                fetchPosts()
                    .then((posts) => {
                        const reversedPosts = posts.reverse()
                        this.setState({
                            posts: reversedPosts
                        })
                    })
            })
    }

    createVideoPost(e) {
        e.preventDefault()

        const body = {
            sid: Math.random() * 1000000,
            type: 'video',
            videoUrl: this.state.videoUrl,
            isPublic: true,
        }

        fetchCreatePost(body)
            .then((post) => {
                console.log(post);
                fetchPosts()
                    .then((posts) => {
                        const reversedPosts = posts.reverse()
                        this.setState({
                            posts: reversedPosts
                        })
                    })
            })
    }

    showPosts() {
        if (!this.state.posts.length) {
            return <h1 className='center'>Loading...</h1>
        }

        if (this.state.allPosts) {
            return this.state.posts.map((post) => {
                if (post.isText()) {
                    return (
                        <div key={post.id} className="row">
                            <div className="col s12">
                                <div className="card teal lighten-4">
                                    <div className="card-content brown-text text-darken-4">
                                        <p className='center'>{post.text}</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/feeds/${post.id}`} className='brown-text text-darken-4'>Text post</Link>
                                        <CommentsCount postId={post.id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else if (post.isPicture()) {
                    return (
                        <div key={post.id} className="row">
                            <div className="col s12">
                                <div className="card teal lighten-4">
                                    <div className="card-image">
                                        <img src={post.imageUrl} alt='Something' />
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/feeds/${post.id}`} className='brown-text text-darken-4'>Image post</Link>
                                        <CommentsCount postId={post.id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div key={post.id} className="row">
                            <div className="col s12">
                                <div className="card teal lighten-4">
                                    <div key={post.id}>
                                        <iframe title={post.id} width="100%" height='400px' src={post.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/feeds/${post.id}`} className='brown-text text-darken-4'>Video post</Link>
                                        <CommentsCount postId={post.id} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        } else if (this.state.onlyImages) {
            return this.state.posts.map((post) => {
                if (post.isPicture()) {
                    return (
                        <div key={post.id} className="row">
                            <div className="col s12">
                                <div className="card teal lighten-4">
                                    <div className="card-image">
                                        <img src={post.imageUrl} alt='Something' />
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/feeds/${post.id}`} className='brown-text text-darken-4'>Image post</Link>
                                        <Link className='right brown-text text-darken-4' to={`/feeds/${post.id}`}>{post.comments.length} Comments</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                return null;
            })
        } else if (this.state.onlyText) {
            return this.state.posts.map((post) => {
                if (post.isText()) {
                    return (
                        <div key={post.id} className="row">
                            <div className="col s12">
                                <div className="card teal lighten-4">
                                    <div className="card-content brown-text text-darken-4">
                                        <p className='center'>{post.text}</p>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/feeds/${post.id}`} className='brown-text text-darken-4'>Text post</Link>
                                        <Link className='right brown-text text-darken-4' to={`/feeds/${post.id}`}>{post.comments.length} Comments</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                return null;
            })
        } else {
            return this.state.posts.map((post) => {
                if (post.isVideo()) {
                    return (
                        <div key={post.id} className="row">
                            <div className="col s12">
                                <div className="card teal lighten-4">
                                    <div key={post.id}>
                                        <iframe title={post.id} width="100%" height='400px' src={post.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </div>
                                    <div className="card-action">
                                        <Link to={`/feeds/${post.id}`} className='brown-text text-darken-4'>Video post</Link>
                                        <Link className='right brown-text text-darken-4' to={`/feeds/${post.id}`}>{post.comments.length} Comments</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                return null
            })
        }
    }

    filterText(e) {
        this.setState({
            allPosts: false,
            onlyImages: false,
            onlyVideos: false,
            onlyText: true,
        })
    }

    filterVideos(e) {
        this.setState({
            allPosts: false,
            onlyImages: false,
            onlyVideos: true,
            onlyText: false,
        })
    }

    filterImages(e) {
        this.setState({
            allPosts: false,
            onlyImages: true,
            onlyVideos: false,
            onlyText: false,
        })
    }

    allPosts(e) {
        this.setState({
            allPosts: true,
            onlyImages: false,
            onlyVideos: false,
            onlyText: false,
        })
    }

    render() {
        return (
            <>
                <div className='row'>
                    <button className="waves-effect waves-light btn col s3" onClick={this.allPosts}>All Posts</button>
                    <button className="waves-effect waves-light btn col s3" onClick={this.filterImages}>Images</button>
                    <button className="waves-effect waves-light btn col s3" onClick={this.filterVideos}>Videos</button>
                    <button className="waves-effect waves-light btn col s3" onClick={this.filterText}>Text</button>
                </div>
                {this.showPosts()}
                <FloatingButton changeInputValues={this.changeInputValues} postContent={this.state.postContent} imageUrl={this.state.imageUrl} videoUrl={this.state.videoUrl} createTextPost={this.createTextPost} createImagePost={this.createImagePost} createVideoPost={this.createVideoPost} />
            </>
        );
    }
}

export default PostsFeed;