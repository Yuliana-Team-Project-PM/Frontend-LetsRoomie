import React from 'react';

import VerticalBanner from '../components/VerticalBanner';
import '../assets/styles/components/CreateGuestAccount.scss';

const CreateHostAccount = () => {
    return(
        <>  
            <div className="CreateGuestAccount">
                <div className="CreateGuestAccount-form">
                    <h2>Cuenta de anfitrión</h2>
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
                    </form>
                </div>
                <div><VerticalBanner /></div>
            </div>
        </>
    );
};

export default CreateHostAccount;