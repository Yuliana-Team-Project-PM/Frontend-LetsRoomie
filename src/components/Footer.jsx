import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Footer.scss';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="RedeSociales">
            <h3>Encuentranos en nuestras redes sociales</h3>
            <img src="https://img.icons8.com/color/48/000000/facebook.png"/>
            <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
            <img src="https://img.icons8.com/fluent/48/000000/twitter.png"/>
            <img src="https://img.icons8.com/color/48/000000/whatsapp.png"/>
            </div>
            <p>© 2020 Lets Rommie Technologies, Inc.</p>
        </footer>
    );
};

export default Footer;