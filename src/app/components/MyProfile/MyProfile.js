import React from 'react'
import { fetchUserById, fetchLoggedInUser } from '../../../services/Users'
import './MyProfile.css'
import Modal from '../Modal/Modal'

class Profile extends React.Component {
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
        const userPromise = this.props.match.params.id
            ? fetchUserById(this.props.match.params.id)
            : fetchLoggedInUser();

        userPromise
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
        console.log('bla');
        if (!this.state.user) {
            return null;
        }

        return (
            <>
                <div className="row center profile">
                    <div className="col s12 ">
                        <div className="">
                            {this.state.isShowing ? <Modal className="modal" show={this.state.isShowing} close={this.closeModal} user={this.state.user} /> : null}
                            <div className="card-image">
                                <img src={this.state.user.avatarUrl} alt="" className="circle responsive-img " />
                                <h5 className="card-title">{`${this.state.user.firstName} ${this.state.user.lastName}`}</h5>
                            </div>
                            <button data-target="modal1" className="btn modal-trigger" onClick={this.openModal}>Edit Profile</button>

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