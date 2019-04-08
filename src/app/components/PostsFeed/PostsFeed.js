import React, { Component } from 'react';
import { fetchPosts } from '../../../services/Posts';

class PostsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
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
        if (!this.state.posts) {
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
                                    <a className='brown-text text-darken-4' href="/">Text post</a>
                                    <a className='right brown-text text-darken-4' href="/">15 Comments</a>
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
                                    <a className='brown-text text-darken-4' href="/">Image post</a>
                                    <a className='right brown-text text-darken-4' href="/">15 Comments</a>
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
                                    <a className='brown-text text-darken-4' href="/">Video post</a>
                                    <a className='right brown-text text-darken-4' href="/">15 Comments</a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    render() {
        return (
            <>
                {this.showPosts()}
            </>
        );
    }
}

export default PostsFeed;