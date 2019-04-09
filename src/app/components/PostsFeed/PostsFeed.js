import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../../services/Posts';

class PostsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            filteredPosts: [],
        }

        this.filterText = this.filterText.bind(this);
        this.filterVideos = this.filterVideos.bind(this);
        this.filterImages = this.filterImages.bind(this);
        this.noFilter = this.noFilter.bind(this);
    }

    componentDidMount() {
        fetchPosts()
            .then((posts) => {
                this.setState({
                    posts
                })
            })
    }

    showPosts() {
        if (!this.state.posts.length) {
            return <h1 className='center'>Loading...</h1>
        }

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
                                    <Link className='right brown-text text-darken-4' to={`/feeds/${post.id}`}>{post.comments.length} Comments</Link>
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
                                    <Link className='right brown-text text-darken-4' to={`/feeds/${post.id}`}>{post.comments.length} Comments</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    filterText(e) {
        const filteredPosts = this.state.posts.filter((post) => {
            return post.isText();
        })

        this.setState({
            filteredPosts: this.state.posts,
            posts: filteredPosts
        })
    }

    filterVideos(e) {
        const filteredPosts = this.state.posts.filter((post) => {
            return post.isVideo();
        })

        this.setState({
            filteredPosts: this.state.posts,
            posts: filteredPosts
        })
    }

    filterImages(e) {
        const filteredPosts = this.state.posts.filter((post) => {
            return post.isPicture();
        })

        this.setState({
            filteredPosts: this.state.posts,
            posts: filteredPosts
        })
    }

    noFilter(e) {
        this.setState({
            posts: this.state.filteredPosts
        })
    }

    render() {
        return (
            <>
                <div className='row'>
                    <button className="waves-effect waves-light btn col s3" onClick={this.noFilter}>All Posts</button>
                    <button className="waves-effect waves-light btn col s3" onClick={this.filterImages}>Images</button>
                    <button className="waves-effect waves-light btn col s3" onClick={this.filterVideos}>Videos</button>
                    <button className="waves-effect waves-light btn col s3" onClick={this.filterText}>Text</button>
                </div>
                {this.showPosts()}
            </>
        );
    }
}

export default PostsFeed;