import React from 'react';

import '../assets/styles/components/AddRoom.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddRoom = () => {
  const saveRoom = () => {
    let newRoom = {
      "namePlace": "Gran Apartamento",
      "location": "Zona norte",
      "city": "Bogotá",
      "images": [
        "string"
      ],
      "price": 5000,
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
      "user": "string"
    }
    let Token = sessionStorage.getItem('Token')
    fetch(`https://api-letsroomie.herokuapp.com/place`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'access-token': Token
      },
      body: JSON.stringify(newRoom)
    });
  }

  return (
    <>
      <Navbar />
      <div className='AddRoom'>
        <h1 className='AddRoom__title'>Nueva habitación</h1>
        <form action="" className='AddRoom__form'>
          <label htmlFor="">Título</label>
          <input type="text" />
          <label htmlFor="">Ciudad</label>
          <input type="text" />
          <label htmlFor="">Dirección</label>
          <input type="text" />
          <label htmlFor="">Descripción</label>
          <input type="text" />
          <label htmlFor="">Muebles incluídos:</label>
          <input type="text" />
          <label htmlFor="">Metros cuadrados:</label>
          <input type="text" />
          <label htmlFor="">Agrega fotos</label>
          <div className='AddRoom__form--photo'>
            <input type="file" name="file" />
          </div>

          <label htmlFor="">Precio</label>
          <input type="text" />

          <p>Servicios disponibles</p>
          <div className='Services'>
            <label className='Services__item'>
              <input type="checkbox" id="wifi" value="" />
                    Wi-fi
            </label>
            <label className='Services__item'>
              <input type="checkbox" id="bath" value="" />
                    Baño
            </label>
            <label className='Services__item'>
              <input type="checkbox" id="parking" value="" />
                    Estacionamiento
            </label>
            <label className='Services__item'>
              <input type="checkbox" id="tv" value="" />
                    Tv
            </label>
            <label className='Services__item'>
              <input type="checkbox" id="cleaning" value="" />
                    Limpieza
            </label>
            <label className='Services__item'>
              <input type="checkbox" id="closet" value="" />
                    Closet
            </label>
          </div>

          <button type="button" className='AddRoom__form--button' onClick={saveRoom}>Guardar Cambios</button>
        </form>
      </div>
    </>
  );
};

export default AddRoom;