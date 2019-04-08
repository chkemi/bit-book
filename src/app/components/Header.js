import React from 'react';

const Header = (props) => {
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">BitBook</a>
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