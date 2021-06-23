import React from 'react';

const Nav = () => {
    return (
        <nav>
            <h1 id='Logo'>Juawito</h1>
            <ul className='nav-links'>
            <li>
                <a href='#Home'>Home</a>
            </li>
            <li>
                <a href='#About'>About</a>
            </li>
            <li>
                <a href='#Projects'>Projects</a>
            </li>
            <li>
                <a href='#Contact'>Contact Info</a>
            </li>
            </ul>
        </nav>
    )
}

export default Nav;