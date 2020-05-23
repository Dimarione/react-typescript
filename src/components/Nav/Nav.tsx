import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav: React.FC = () => {
    return (
        <nav className = 'nav'>
            <div className='nav-item'>
                <Link className = 'link-item' to = '/form'>Person form</Link>
            </div>
            <div className='nav-item'>
                <Link className = 'link-item' to = '/list'>Person list</Link>
            </div>
        </nav>
    )
}

export default Nav;

