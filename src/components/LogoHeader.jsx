import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/static/lets-roomie-logo.svg';
import '../assets/styles/components/LogoHeader.scss';

const LogoHeader = () => {
    return(
        <header className='Header'>
            <Link to="/"><img src={logo} className='Header__logo' /></Link>
        </header>
    );
};

export default LogoHeader;