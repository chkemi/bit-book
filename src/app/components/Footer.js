import React from 'react';

const Footer = (props) => {
    return (
        <footer className="page-footer">
            <div className="container center">
                <p>© Copyright: NexoVocniTeam {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;