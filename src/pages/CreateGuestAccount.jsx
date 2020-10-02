import React from 'react';

import LogoHeader from '../components/LogoHeader';
import VerticalBanner from '../components/VerticalBanner';
import '../assets/styles/components/CreateGuestAccount.scss';

import guest from '../assets/static/guest.png'

const CreateGuestAccount = () => {
    return(
        <> 
            <LogoHeader /> 
            <section className="CreateGuestAccount">
                <div className="CreateGuestAccount__form">
                    <h2>Cuenta de huesped</h2>
                    <form action="" className="CreateGuestAccount__fields">
                        <label htmlFor="">Nombre Completo</label>
                        <input type="text"/>
                        <label htmlFor="">Correo electrónico</label>
                        <input type="text"/>
                        <label htmlFor="">Teléfono</label>
                        <input type="number"/>
                        <label htmlFor="">Contraseña</label>
                        <input type="text"/>
                        <label htmlFor="">Confirmar contraseña</label>
                        <input type="text"/>
                        <button className='Login__card--button'>Crear cuenta</button>
                    </form>
                </div>
                <div><VerticalBanner ilustration={guest} /></div>
            </section>
        </>
    );
};

export default CreateGuestAccount;