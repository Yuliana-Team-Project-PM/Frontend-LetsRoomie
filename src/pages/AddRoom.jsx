import React from 'react';

import '../assets/styles/components/AddRoom.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddRoom = () => {
    return(
        <>  
            <Navbar />
            <div className='AddRoom'>
                <h1 className='AddRoom__title'>Nueva habitación</h1>
                <form action="" className='AddRoom__form'>
                    <label htmlFor="">Título</label>
                    <input type="text"/>
                    <label htmlFor="">Ubicación</label>
                    <input type="text"/>
                    <label htmlFor="">Descripción corta</label>
                    <input type="text"/>
                    <label htmlFor="">Descripción larga</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <label htmlFor="">Servicios disponibles</label>
                    <input type="text"/>
                    <label htmlFor="">Agrega fotos</label>
                    <div className='AddRoom__form--photo'>
                        +
                    </div>
                    {/* <input type="text"/> */}
                    <label htmlFor="">Costo mensual</label>
                    <input type="text"/>
                    <button className='AddRoom__form--button'>Guardar Cambios</button>
                </form>
            </div>
        </>
    );
};

export default AddRoom;