import React from 'react';

import '../assets/styles/components/AddRoom.scss';
import Navbar from '../components/Navbar';

const AddRoom = () => {
    return(
        <>  
            <Navbar />
            <div className="AddRoom">
                <div className="AddRoom-form">
                    <h2>Nueva habitación</h2>
                    <form action="" className="AddRoom__fields">
                        <label htmlFor="">Título</label>
                        <input type="text"/>
                        <label htmlFor="">Ubicación</label>
                        <input type="text"/>
                        <label htmlFor="">Descripción corta</label>
                        <input type="text"/>
                        <label htmlFor="">Descripción larga</label>
                        <input type="text"/>
                        <label htmlFor="">Servicios disponibles</label>
                        <input type="text"/>
                        <label htmlFor="">Agrega fotos</label>
                        <input type="text"/>
                        <label htmlFor="">Costo mensual</label>
                        <input type="text"/>
                        <button>Guardar Cambios</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddRoom;