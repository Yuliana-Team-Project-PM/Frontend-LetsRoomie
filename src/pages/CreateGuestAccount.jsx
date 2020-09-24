import React from 'react';

import VerticalBanner from '../components/VerticalBanner';
import '../assets/styles/components/CreateGuestAccount.scss';

const CreateGuestAccount = () => {
    return(
        <>  
            <div className="CreateGuestAccount">
                <div className="CreateGuestAccount-form">
                    <h2>Cuenta de huesped</h2>
                    <form action="" className="CreateGuestAccount__fields">
                        <label htmlFor="">Nombre Completo</label>
                        <input type="text"/>
                        <label htmlFor="">Correo electrónico</label>
                        <input type="text"/>
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

export default CreateGuestAccount;