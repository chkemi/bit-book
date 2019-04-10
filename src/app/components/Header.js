import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    console.log('sdfsdfsdf');
    if (localStorage.getItem('user')) {
        return (
            <header>
                <nav className='teal darken-2'>
                    <div className="nav-wrapper container">
                        <Link to='/' className="brand-logo">BitBook</Link>
                        <ul id="nav-mobile" className="right">
                            <li><Link to='/feeds'>Feed</Link></li>
                            <li><Link to='/people'>People</Link></li>
                            <li><Link to='/profile/2'>Profile</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }

    return (
        <header>
            <nav className='teal darken-2'>
                <div className="nav-wrapper container">
                    <h6 className="brand-logo">BitBook</h6>
                </div>
            </nav>
        </header>
    );

}

export default Header;