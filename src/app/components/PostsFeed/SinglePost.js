import React, { Component } from 'react';
import { fetchSinglePost } from '../../../services/Posts';
import { fetchUserById, getDecodedId } from '../../../services/Users';
import { User } from '../../../models/User';
import { postComment, fetchCommentsForSinglePost } from '../../../services/Comments';

import './SinglePost.css'

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            comments: [],
            users: [],
            commentInputValue: '',
        }

        this.changeValue = this.changeValue.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }

    componentDidMount() {
        fetchSinglePost(this.props.match.params.id)
            .then((post) => {
                const usersId = post.comments.map((comment) => {
                    return fetchUserById(comment.userId)
                })

                Promise.all(usersId)
                    .then((users) => {
                        this.setState({
                            post,
                            users,
                            comments: post.comments
                        })
                    })
            })
    }

    changeValue(e) {
        this.setState({
            commentInputValue: e.target.value,
        })
    }

    submitComment(e) {
        e.preventDefault();

        const body = {
            sid: Math.random() * 1000000,
            userId: getDecodedId(),
            postId: this.props.match.params.id,
            body: this.state.commentInputValue,
            isPublic: true
        }

        postComment(body)
            .then((comment) => {
                console.log(comment);

                fetchCommentsForSinglePost(this.props.match.params.id)
                    .then((comments) => {
                        this.setState({
                            comments
                        })
                    })

            })
    }

    showPost() {
        if (!this.state.post) {
            return <h1>Loading</h1>;
        }

        if (this.state.post.isText()) {
            return (
                <div key={this.state.post.id} className="row post">
                    <div className="col s12">
                        <div className="card teal lighten-4">
                            <div className="card-content brown-text text-darken-4">
                                <p className='center'>{this.state.post.text}</p>
                            </div>
                            <div className="card-action">
                                <a className='brown-text text-darken-4' href="/">Text post</a>
                                <a className='right brown-text text-darken-4' href="/">{this.state.comments.length} Comments</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.post.isPicture()) {
            return (
                <div key={this.state.post.id} className="row post">
                    <div className="col s12">
                        <div className="card teal lighten-4">
                            <div className="card-image">
                                <img src={this.state.post.imageUrl} alt='Something' />
                            </div>
                            <div className="card-action">
                                <a className='brown-text text-darken-4' href="/">Image post</a>
                                <a className='right brown-text text-darken-4' href="/">{this.state.comments.length} Comments</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div key={this.state.post.id} className="row post">
                    <div className="col s12">
                        <div className="card teal lighten-4">
                            <div key={this.state.post.id}>
                                <iframe title={this.state.post.id} width="100%" height='400px' src={this.state.post.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="card-action">
                                <a className='brown-text text-darken-4' href="/">Video post</a>
                                <a className='right brown-text text-darken-4' href="/">{this.state.comments.length} Comments</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    showComments() {
        return this.state.comments.map((comment, ind) => {
            return (
                <div key={comment.id} className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-image">
                                <img className='comment-image' src={this.state.users[ind].avatarUrl} alt='Something' />
                            </div>
                            <div className="card-content">
                                <p>{comment.body}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        console.log(this.state.comments);
        return (
            <>
                {this.showPost()}
                <form method='POST' action='/'>
                    <input type='text' placeholder='Add your comment' value={this.state.commentInputValue} onChange={this.changeValue} />
                    <input type='submit' className='teal white-text' onClick={this.submitComment} disabled={this.state.commentInputValue ? false : true} />
                </form>
                {this.showComments()}
            </>
        );
    }
}

export default SinglePost;