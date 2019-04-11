import React, { Component } from 'react';
import { fetchLoggedInUser } from '../../../services/Users'
import Profile from './Profile';

import './MyProfile.css'

class MyProfile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            comments: [],
            posts: [],
            isShowing: false
        }
    }

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData = () => {
        fetchLoggedInUser()
            .then(user => {
                this.setState({
                    user: user,
                    comments: user.comments,
                    posts: user.posts
                })
            })
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.fetchUserData();
        }
    }

    openModal = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModal = () => {
        this.setState({
            isShowing: false
        });
    }

    render() {
        if (!this.state.user) {
            return null;
        }

        return (
            <>
                <Profile isShowing={this.state.isShowing} user={this.state.user} comments={this.state.comments} posts={this.state.posts} closeModal={this.closeModal} openModal={this.openModal} />
            </>
        )
    }
}

export default MyProfile