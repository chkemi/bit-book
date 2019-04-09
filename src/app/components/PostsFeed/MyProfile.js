import React from 'react'
import { fetchUserById } from '../../../services/Users'
import './MyProfile.css'


class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            comments: [],
            posts: []
        }
    }

    componentDidMount() {
        fetchUserById(2)
            .then(user => {
                console.log(user);
                this.setState({
                    user: user,
                    comments: user.comments,
                    posts: user.posts
                })
            })
    }
    render() {

        if (!this.state.user) {
            return null;
        }

        return (
            <>
                <div className="row center profile">
                    <div className="col s12 ">
                        <div className="">
                            <div className="card-image">
                                <img src={this.state.user.avatarUrl} alt="" className="circle responsive-img " />
                                <h5 className="card-title">{`${this.state.user.firstName} ${this.state.user.lastName}`}</h5>
                            </div>
                            <p>Edit profile</p>
                            <div className="card-content">
                                <p>{this.state.user.biography}</p>
                            </div>
                            <div className="card-action">
                                <div className="chip"><i className="fab fa-cuttlefish"></i> {this.state.comments.length} Comments  </div>
                                <div className="chip"><i className="fab fa-cuttlefish"></i> {this.state.posts.length} posts </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile