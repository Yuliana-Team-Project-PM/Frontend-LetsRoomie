import React from 'react';

import '../assets/styles/components/Hero.scss';

const Hero = () => {
    return(
        <div className='Hero'>
            <div className='Hero__gradient'></div>
            <div className='Hero__title'>
                <h1 className='Hero__title--description'>Te ayudamos a encontrar tu <span>espacio ideal</span> con el <span>ROOMIE</span> correcto.</h1>
                <button className='Hero__title--button'>Únete</button>
            </div>
        </div>
    );
};

export default Hero;