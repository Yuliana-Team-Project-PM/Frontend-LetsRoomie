import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/static/lets-roomie-logo.svg';
import DropdownMenu from '../components/DropdownMenu';
import '../assets/styles/components/Navbar.scss';

const Navbar = () => {

    let token=2
    let dropMenu
    if(token===1){
        dropMenu=""
    }
    else{
        dropMenu=<DropdownMenu />
    }
    return(
        <header className='Header'>
            <Link to="/"><img alt="Logo" src={logo} className='Header__logo' /></Link>
            <nav className='Header__nav'>
                <Link to="/login"><button className='Header__nav--buttonLigth'>Login</button></Link>
                <Link to='/select-acount'><button className='Header__nav--button'>Crear cuenta</button></Link>
                {dropMenu}
            </nav>

        </header>
    );
};

export default Navbar;
