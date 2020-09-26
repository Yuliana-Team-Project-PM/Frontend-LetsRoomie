import React from 'react';
import { Link } from 'react-router-dom';

import LogoHeader from '../components/LogoHeader';

import '../assets/styles/components/CreateAcountSelect.scss';
import huesped from '../assets/static/select1.png';
import anfitrion from '../assets/static/select2.png';

const CreateAcountSelect = () => {
    return(
        <>
            <LogoHeader />
            <div className='CreateAcountSelect'>
                <h1 className='CreateAcountSelect__title'>Bienvenido a Let's Roomie</h1>
                <h2 className='CreateAcountSelect__subtitle'>Crea una cuenta</h2>
                <div className='CreateAcountSelect__select'>
                    <Link to="/acount-guest">
                        <div className='CreateAcountSelect__select--button'>
                            <p>Como huesped</p>
                            <img src={huesped} alt=""/>
                        </div>
                    </Link>
                    <Link to="/acount-host">
                        <div className='CreateAcountSelect__select--button'>
                            <p>Como anfitrion</p>
                            <img src={anfitrion} alt=""/>
                        </div>
                    </Link>
                </div>
                <h4 className='CreateAcountSelect__subtitle'>¿Ya tienes una cuenta? <Link to='login' >Ingresa aquí</Link> </h4>
            </div>
        </>
    );
};

export default CreateAcountSelect;