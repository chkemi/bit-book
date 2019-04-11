import React, { Component } from 'react';

import { fetchRegister } from '../../services/Register';

import M from 'materialize-css';
import './Register.css';
import { fetchLogin } from '../../services/Login';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInputValueReg: '',
            emailInputValueReg: '',
            emailInputValueLog: '',
            passwordInputValueReg: '',
            passwordInputValueLog: '',
        }

        this.instance = null;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendRegisterReq = this.sendRegisterReq.bind(this);
        this.sendLoginReq = this.sendLoginReq.bind(this);
    }

    componentDidMount() {
        this.instance = M.Tabs.init(document.querySelector('.tabs'));
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sendRegisterReq(e) {
        e.preventDefault();

        const data = {
            name: this.state.nameInputValueReg,
            email: this.state.emailInputValueReg,
            password: this.state.passwordInputValueReg,
        }

        fetchRegister(data)
            .then((data) => {
                console.log(data);
            })

        this.instance.select('login');
    }

    sendLoginReq(e) {
        e.preventDefault();

        const data = {
            email: this.state.emailInputValueLog,
            password: this.state.passwordInputValueLog
        }

        fetchLogin(data)
            .then((data) => {
                if (data.accessToken) {
                    localStorage.setItem('user', data.accessToken);
                    this.props.logIn();
                }
                console.log(data);
            })
    }

    render() {
        return (
            <>
                <div className='row'>
                    <div className='register col s7'>
                        <h1>BitBook Register and Login</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt et voluptatum aliquam accusamus consequuntur distinctio nulla consectetur, dolorum dignissimos necessitatibus commodi. Nulla, maxime sint architecto ex itaque harum quas, quidem iusto eligendi laudantium, magni maiores quos. Odio necessitatibus ipsa laboriosam?</p>
                    </div>
                    <div className='col s5'>
                        <div className="row">
                            <div className="col s12">
                                <ul className="tabs">
                                    <li className="tab col s6"><a href="#login">Login</a></li>
                                    <li className="tab col s6"><a className='active' href="#register">Register</a></li>
                                </ul>
                            </div>
                            <div id="login" className="col s12">
                                <form>
                                    <div className="form row">
                                        <div className="input-field col s12">
                                            <input name='emailInputValueLog' onChange={this.handleInputChange} placeholder="Email address" id="login-email" type="email" className="validate" value={this.state.emailInputValueLog} />
                                            <label htmlFor="login-email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input name='passwordInputValueLog' onChange={this.handleInputChange} placeholder='Minimum 6 characters' id="login-password" type="password" className="validate" value={this.state.passwordInputValueLog} />
                                            <label htmlFor="login-password">Password</label>
                                        </div>
                                    </div>
                                    <button onClick={this.sendLoginReq} className='register col s12' type='submit'>Login</button>
                                </form>
                            </div>
                            <div id="register" className="col s12">
                                <form>
                                    <div className="form row">
                                        <div className="input-field col s12">
                                            <input onChange={this.handleInputChange} name='nameInputValueReg' placeholder="Full name" id="full-name" type="text" className="validate" value={this.state.nameInputValueReg} />
                                            <label htmlFor="full-name">Name</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input onChange={this.handleInputChange} name='emailInputValueReg' placeholder="Email address" id="register-email" type="email" className="validate" value={this.state.emailInputValueReg} />
                                            <label htmlFor="register-email">Email</label>
                                        </div>
                                        <div className="input-field col s12">
                                            <input onChange={this.handleInputChange} name='passwordInputValueReg' placeholder='Minimum 6 characters' id="register-password" type="password" className="validate" value={this.state.passwordInputValueReg} />
                                            <label htmlFor="register-password">Password</label>
                                        </div>
                                    </div>
                                    <button className='register col s12' type='submit' onClick={this.sendRegisterReq}>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default RegisterPage;