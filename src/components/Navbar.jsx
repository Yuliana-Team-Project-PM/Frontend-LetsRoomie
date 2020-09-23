import React from 'react';

import logo from '../assets/static/lets-roomie-logo.svg';
import '../assets/styles/components/Navbar.scss';

const Navbar = () => {
    return(
        <header className='Header'>
            <img src={logo} className='Header__logo' />
            <div className='Header__nav'>
                <button className='Header__nav--buttonLigth'>Login</button>
                <button className='Header__nav--button'>Crear cuenta</button>
            </div>

        </header>
    );
};

export default Navbar;
