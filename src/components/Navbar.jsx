import React from 'react';

import logo from '../assets/static/lets-roomie-logo.svg';
import '../assets/styles/components/Navbar.scss';

const Navbar = () => {
    return(
        <header className='Header'>
            <a href="/"><img src={logo} className='Header__logo' /></a>
            <div className='Header__nav'>
                <a href="/Login"><button className='Header__nav--buttonLigth'>Login</button></a>
                <button className='Header__nav--button'>Crear cuenta</button>
            </div>

        </header>
    );
};

export default Navbar;
