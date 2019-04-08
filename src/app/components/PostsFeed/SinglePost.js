import React, { Component } from 'react'

class SinglePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            comments: [],
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="post-details">
                <div className="view-post-video">
                    <iframe width="800" height="500" src="https://www.youtube.com/embed/YbtlMuQ6dns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="view-post-input">

                    <input type="text" placeholder="Add your comment" />
                    <button>send</button>

                </div>
                <div className="view-post-comments">
                    <div className="view-post-comment">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Stevan_Kragujevic%2C_Slobodan_Milosevic%2C_portret.jpg/220px-Stevan_Kragujevic%2C_Slobodan_Milosevic%2C_portret.jpg" title="Users Image" />
                        <h3>Sloba</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SinglePost;