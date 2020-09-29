import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Footer.scss';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="RedeSociales">
            <h3>Encuentranos en nuestras redes sociales</h3>
            <img alt="icono de FaceBook" src="https://img.icons8.com/color/48/000000/facebook.png"/>
            <img alt="icono de Instagram" src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
            <img alt="icono de Twitter" src="https://img.icons8.com/fluent/48/000000/twitter.png"/>
            <img alt="icono de whatsapp" src="https://img.icons8.com/color/48/000000/whatsapp.png"/>
            </div>
            <p>© 2020 Lets Rommie Technologies, Inc.</p>
        </footer>
    );
};

export default Footer;