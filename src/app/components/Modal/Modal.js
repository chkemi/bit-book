import React from 'react';

import './Modal.css';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.user.firstName,
            img: props.image,
            inpValue: ''
        }
    }

    getInputValue = (e) => {
        this.setState({
            inpValue: e.target.value
        })
    }

    isValid = (value) => {
        if (value.length > 3 && value.length < 30) {
            return {
                validate: true
            }
        } else {
            return {
                validate: false,
                errorInput: () => {
                    return (
                        <p style={{ color: 'red', width: '50px' }}>Error</p>
                    )
                }
            }

        }
    }


    render() {


        const validationResult = this.isValid(this.state.inpValue)
        return (

            <div className="modal-wrapper "
                style={{
                    transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <div className="row">
                    <div className="col s6 "><h4>Update profile</h4></div>
                </div>
                <div className="row">
                    <div className="col s6 center">
                        <img src={this.state.img} title="user" alt='Something..' />
                        {/* <input class="file-path validate" type="file"
                            placeholder="Upload file" /> */}

                    </div>
                    <div className="input-field col s6">

                        <label for="first_name">Name
                    <input placeholder="FullName" value={this.state.name} onChange={this.getInputValue} id="first_name" type="text" className="validate" />
                            {!validationResult.validate && validationResult.errorInput()}
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10 offset-s1">

                        <input placeholder="User description and all text that descirbes user" onChange={this.getInputValue} type="text" className="validate" />
                        {!validationResult.validate && validationResult.errorInput()}
                    </div>
                </div>

                <div className="row">
                    <button className="btn waves-effect waves-light btn-mrg-1" onClick={this.props.close}>CLOSE</button>
                    <button className="btn waves-effect waves-light btn-mrg-2" type="submit" name="action">UPDATE</button>
                </div>

            </div >

        )
    }
}


export default Modal;