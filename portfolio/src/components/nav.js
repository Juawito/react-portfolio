import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <h1 id='Logo'>Juawito</h1>
            <ul className='nav-links'>
            <li>
                <Link to='/'>
                Home
                </Link>
            </li>
            <li>
                <Link to='/about'>
                About
                </Link>
            </li>
            <li>
                <Link to='/projects'>
                Projects
                </Link>
            </li>
            <li>
                <Link to='/contact'>
                Contact
                </Link>
            </li>
            </ul>
        </nav>
    )
}

export default Nav;