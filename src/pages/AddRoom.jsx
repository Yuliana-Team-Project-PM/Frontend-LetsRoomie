import React from 'react';

import '../assets/styles/components/AddRoom.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddRoom = () => {
    const saveRoom=()=>{
    let idUser=sessionStorage.getItem('idUser')
    console.log(idUser)
    let newRoom={
            "namePlace": "Gran Apartamento",
            "location": "Zona sur",
            "city": "Medellín",
            "images": [
              "string"
            ],
            "price": 8000,
            "available": true,
            "furniture": [
              "string"
            ],
            "wifi": true,
            "bath": true,
            "parking": true,
            "tv": true,
            "cleaning": true,
            "closet": true,
            "size": 150,
            "description": "Hermoso apartamento de 2 habitaciones, con vista al mar",
            "user":idUser
          }
    console.log(newRoom)
          let Token=sessionStorage.getItem('Token')
          fetch(`https://api-letsroomie.herokuapp.com/place`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'access-token':Token
               },
            body: JSON.stringify(newRoom)
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
                    <button type="button" className='AddRoom__form--button' onClick={saveRoom}>Guardar Cambios</button>
                </form>
            </div>
        </>
    );
};

export default AddRoom;