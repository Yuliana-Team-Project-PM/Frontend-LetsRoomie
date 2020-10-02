import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Footer.scss';

const Footer = () => {
    return(
        <footer className="footer">
            <section className="footer__cta">
                <h3>Miles de personas han encontrado su Roomate apropiado, ahora es tu turno</h3>
                <Link to='select-acount'><button className="footer__cta--button">LET'S ROOMIE</button></Link>
            </section>
            <section className="footer__icons">
                <div>
                    <p>© 2020 Lets Rommie Technologies, Inc.</p>
                </div>
                <div>
                    <p>Nuestras redes sociales</p>
                    <a href="#"><img alt="icono de FaceBook" src="https://img.icons8.com/color/48/000000/facebook.png"/></a>
                    <a href="#"><img alt="icono de Instagram" src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
                    <a href="#"><img alt="icono de Twitter" src="https://img.icons8.com/fluent/48/000000/twitter.png"/></a>
                    <a href="#"><img alt="icono de whatsapp" src="https://img.icons8.com/color/48/000000/whatsapp.png"/></a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;