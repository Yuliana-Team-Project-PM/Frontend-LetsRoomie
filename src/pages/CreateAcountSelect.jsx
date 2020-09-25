import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/CreateAcountSelect.scss';
import huesped from '../assets/static/select1.png';
import anfitrion from '../assets/static/select2.png';

const CreateAcountSelect = () => {
    return(
        <div className='CreateAcountSelect'>
            <h1 className='CreateAcountSelect__title'>Bienvenido a Let's Roomie</h1>
            <h2 className='CreateAcountSelect__subtitle'>Crea una cuenta</h2>
            <div className='CreateAcountSelect__select'>
                <a href="">
                    <div className='CreateAcountSelect__select--button'>
                        <p>Como huesped</p>
                        <img src={huesped} alt=""/>
                    </div>
                </a>
                <a href="">
                    <div className='CreateAcountSelect__select--button'>
                        <p>Como anfitrion</p>
                        <img src={anfitrion} alt=""/>
                    </div>
                </a>
            </div>
            <h4 className='CreateAcountSelect__subtitle'>¿Ya tienes una cuenta? <a href='' >Ingresa aquí</a> </h4>
        </div>
    );
};

export default CreateAcountSelect;