import React from 'react'
import fetchUser from '../../../services/Users'


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
        fetchUser(2)
            .then(user => {
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
                <div classNmae="row">
                    <div classNmae="col s12 m7">
                        <div classNmae="card">
                            <div classNmae="card-image">
                                <img src={this.state.user.image} />
                                <h3 className="card-title">{this.state.user.name.first}</h3>
                            </div>
                            <div class="card-content">
                                <p>{this.state.user.biography}</p>
                            </div>
                            <div class="card-action">
                                <div className="posts"><span>C</span>Comments: {this.state.comments.length} </div>
                                <div className="comments"><span>C</span>Post: {this.state.posts.length} </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Profile

//_embed[]=posts&_embed[]=comments