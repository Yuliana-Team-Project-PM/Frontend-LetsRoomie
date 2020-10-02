import React from 'react';

import '../assets/styles/components/AddRoom.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddRoom = () => {
    const saveRoom=()=>{

        fetch('https://api-letsroomie.herokuapp.com/signin',{
            method: 'POST',
            body: JSON.stringify(datosLogin),
            headers:{
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log(response)
            });
    }

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
                    <label htmlFor="">Descripción</label>
                    <input type="text"/>
                    <label htmlFor="">Servicios disponibles</label>
                    <input type="text"/>
                    <label htmlFor="">Agrega fotos</label>
                    <div className='AddRoom__form--photo'>
                        +
                    </div>
                    <label htmlFor="">Precio</label>
                    <input type="text"/>
                    <button className='AddRoom__form--button' onClick={saveRoom}>Guardar Cambios</button>
                </form>
            </div>
        </>
    );
};

export default AddRoom;