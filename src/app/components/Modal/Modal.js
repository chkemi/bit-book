import React from 'react';

import './Modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: props.user.firstName,
            bio: props.user.biography,
            image: props.user.avatarUrl
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    isValidName = (value) => {
        if (value.length > 30) {
            return { error: 'Error' };
        }

        if (value.length < 3) {
            return { error: 'Error' };
        }

        return true;
    }


    isValidBio = (value) => {
        if (value.length > 60) {
            return { error: "Error" };
        }

        if (value.length < 10) {
            return { error: 'Error' };
        }

        return true
    }

    isValidImg = (value) => {
        if (!value.length) {
            return { error: "Error" }
        }
        // if (!value.endsWith("jpg")) {
        //     return { error: "Error" }
        // }
        // if (!value.endsWith("jpeg")) {
        //     return { error: "Error" }
        // }
        // if (!value.endsWith("png")) {
        //     return { error: "Error" }
        // }

        // if (!value.endsWith("svg")) {
        //     return { error: "Error" }
        // }
        // if (!value.startsWith("http")) {
        //     return { error: "Error" }
        // }
        return true
    }

    render() {

        const validationResultName = this.isValidName(this.state.name);
        const validationResultBio = this.isValidBio(this.state.bio)
        const validationResultImg = this.isValidImg(this.state.image)

        return (

            <div className="modal-wrapper "
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col s6 "><h4>Update profile</h4></div>
                    </div>
                    <div className="row" >
                        <div className="col s5 center">
                            <img src={this.props.user.avatarUrl} title="user" alt='Something..' />

                        </div>
                        <div className="input-field col s5 " id="full_name"><p className="left">Full Name:</p>


                            <input
                                name="name"
                                placeholder="Name"
                                onChange={this.handleInputChange}
                                id="first_name" type="text"
                                className="validate"
                                defaultValue={this.state.name} />
                            {validationResultName.error && <p style={{ color: 'red', width: '50px' }}>{validationResultName.error}</p>}

                        </div>
                    </div>
                    <div className="row"><p>Image URL:</p>
                        <label htmlFor="img_url">
                            <input
                                name='image'
                                placeholder="ImgUrl"
                                onChange={this.handleInputChange}
                                id="img_url"
                                type="text"
                                className="validate"
                                defaultValue={this.state.image}
                            />
                            {validationResultImg.error && <p style={{ color: 'red', width: '50px' }}>{validationResultImg.error}</p>}
                        </label>
                    </div>
                    <div className="row"><p>Biography:</p>

                        <label htmlFor="biography">

                            <input
                                name='bio'
                                placeholder="User description and all text that descirbes user"
                                id="biography" onChange={this.handleInputChange}
                                type="text" className="validate"
                                defaultValue={this.state.bio}
                            />
                            {validationResultBio.error && <p style={{ color: 'red', width: '50px' }}>{validationResultBio.error}</p>}
                        </label>


                    </div>

                    <div className="row">
                        <button className="btn waves-effect waves-light btn-mrg-1" onClick={this.props.close}>CLOSE</button>
                        <button className="btn waves-effect waves-light btn-mrg-2" type="submit" disabled={validationResultBio.error || validationResultImg.error || validationResultName.error} name="action">UPDATE</button>
                    </div>
                </form>
            </div >

        )
    }
}


export default Modal;