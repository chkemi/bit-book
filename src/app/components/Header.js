import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className='teal darken-2'>
                <div className="nav-wrapper container">
                    <a href="/" className="brand-logo">BitBook</a>
                    <ul id="nav-mobile" className="right">
                        <li><a href="sass.html">Feed</a></li>
                        <li><a href="badges.html">People</a></li>
                        <li><Link to='/profile'>Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;