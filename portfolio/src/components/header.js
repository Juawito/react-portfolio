import React from 'react';

import Nav from './nav.js';

const Header = () => {
    return (
        <header>
            <section id='Home' className = 'landing'>
            <Nav />
            <h2 className='big-text'>Juan Santiago</h2>
            </section>
        </header>
    )
}

export default Header;