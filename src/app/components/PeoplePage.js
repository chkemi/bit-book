import React, { Component } from 'react';
import { fetchUsers } from '../../services/Users';

import './PeoplePage.css'

class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            inputValue: '',
        }

        this.changeValue = this.changeValue.bind(this);
    }

    componentDidMount() {
        fetchUsers().then((users) => {
            this.setState({
                users
            })
        })
    }

    changeValue(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }

    showSearch() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required value={this.state.inputValue} onChange={this.changeValue} />
                            <label className="label-icon" htmlFor="search">
                                <i className="fas fa-search"></i>
                            </label>
                        </div>
                    </form>
                </div>
            </nav>
        );
    }

    showPeople() {
        return this.state.users.map((user) => {
            return (
                <div key={user.id} className='user clearfix valign-wrapper'>
                    <div className='image left'>
                        <img src={user.avatarUrl} alt='Something..' />
                    </div>
                    <div className='info'>
                        <h5>{`${user.firstName} ${user.lastName}`}</h5>
                        <p>Short user description: {user.biography}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <>
                {this.showSearch()}
                {this.showPeople()}
            </>
        )
    }
}

export default PeoplePage;