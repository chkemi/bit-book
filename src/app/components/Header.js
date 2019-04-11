import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <header>
            <nav className='teal darken-2'>
                <div className="nav-wrapper container">
                    <Link to='/' className="brand-logo">BitBook</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to='/'>Feed</Link></li>
                        <li><Link to='/people'>People</Link></li>
                        <li><Link to='/profile/2'>Profile</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;