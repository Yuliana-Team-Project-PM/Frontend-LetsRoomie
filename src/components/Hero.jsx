import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Hero.scss';

const Hero = () => {
    return(
        <section className='Hero'>
            <div className='Hero__gradient'></div>
            <div className='Hero__title'>
                <h1 className='Hero__title--description'>Te ayudamos a encontrar tu <span>espacio ideal</span> con el <span>ROOMIE</span> correcto.</h1>
                <Link to='select-acount'>
                    <button className='Hero__title--button'>Únete</button>
                </Link>
            </div>
        </section>
    );
};

export default Hero;