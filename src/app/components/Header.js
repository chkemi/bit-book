import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className='teal darken-2'>
                <div className="nav-wrapper container">
                    <Link to='/' className="brand-logo">BitBook</Link>
                    <ul id="nav-mobile" className="right">
                        <li><a href="sass.html">Feed</a></li>
                        <li><a href="badges.html">People</a></li>
                        <li><a href="collapsible.html">Profile</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;