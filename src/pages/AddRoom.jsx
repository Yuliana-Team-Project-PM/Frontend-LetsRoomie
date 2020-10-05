import React, { useState } from 'react';
import axios from 'axios';
import '../assets/styles/components/AddRoom.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AddRoom = () => {
  const [selectedFiles, setSelectedFile] = useState()
  const multipleFileChangedHandler = (event) => {
    setSelectedFile(event.target.files)
    console.log( event.target.files );
   };

   const multipleFileUploadHandler = () => {
    const data = new FormData();
  // If file selected
    if ( selectedFiles ) {
      alert("ey")
     for ( let i = 0; i < selectedFiles.length; i++ ) {
      data.append( 'galleryImage', selectedFiles[ i ], selectedFiles[ i ].name );
     }
  axios.post( 'https://api-letsroomie.herokuapp.com/api/profile/multipleUpload', data, {
      headers: {
       'accept': 'application/json',
       'Accept-Language': 'en-US,en;q=0.8',
       'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      }
     })
      .then( ( response ) => {
       console.log( 'res', response );
  if ( 200=== response.status ) {
        console.log(response)
        // If file size is larger than expected.
        if( response.data.error ) {
         if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
          //this.ocShowAlert( 'Max size: 2MB', 'red' );
         } else if ( 'LIMIT_UNEXPECTED_FILE' === response.data.error.code ){
          //this.ocShowAlert( 'Max 4 images allowed', 'red' );
         } else {
          // If not the given ile type
          //this.ocShowAlert( response.data.error, 'red' );
         }
        } else {
         // Success
         let fileName = response.data;
         console.log( 'fileName', fileName );
         //this.ocShowAlert( 'File Uploaded', '#3089cf' );
  }
       }
      }).catch( ( error ) => {
      // If another error
      //this.ocShowAlert( error, 'red' );
     });
    } else {
      alert("paila")
     // if file not selected throw error
     //this.ocShowAlert( 'Please upload file', 'red' );
    }
  };
  const saveRoom = () => {
    let idUser=sessionStorage.getItem('idUser')
    let titulo=document.getElementById("titulo").value
    let ciudad=document.getElementById("ciudad").value
    let dirección=document.getElementById("dirección").value
    let descripción=document.getElementById("descripción").value
    let furniture=document.getElementById("furniture").value
    let metros=document.getElementById("metros").value
    let precio=document.getElementById("precio").value
  


    let wifi=document.getElementById("wifi").checked
    let bath=document.getElementById("bath").checked
    let parking=document.getElementById("parking").checked
    let tv=document.getElementById("tv").checked
    let cleaning=document.getElementById("cleaning").checked
    let closet=document.getElementById("closet").checked

    multipleFileUploadHandler()

    let newRoom = {
      "namePlace": titulo,
      "location": dirección,
      "city": ciudad,
      "images": [
        "string"
      ],
      "price": precio,
      "available": true,
      "furniture": [
        furniture
      ],
      "wifi": wifi,
      "bath": bath,
      "parking": parking,
      "tv": tv,
      "cleaning": cleaning,
      "closet": closet,
      "size": metros,
      "description":descripción,
      "user": idUser
    }
    console.log(newRoom)
    let Token = sessionStorage.getItem('Token')
    fetch(`https://api-letsroomie.herokuapp.com/place`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'access-token': Token
      },
      body: JSON.stringify(newRoom)
      })
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
              console.log(response)
      });
  }

  return (
    <>
      <Navbar />
      <div className='AddRoom'>
        <h1 className='AddRoom__title'>Nueva habitación</h1>
        <form action="" className='AddRoom__form'>
          <label htmlFor="">Título</label>
          <input type="text" id="titulo"/>
          <label htmlFor="">Ciudad</label>
          <input type="text" id="ciudad"/>
          <label htmlFor="">Dirección</label>
          <input type="text" id="dirección"/>
          <label htmlFor="">Descripción</label>
          <input type="text" id="descripción"/>
          <label htmlFor="">Muebles incluídos:</label>
          <input type="text" id="furniture"/>
          <label htmlFor="">Metros cuadrados:</label>
          <input type="text" id="metros"/>
          <label htmlFor="">Agrega fotos</label>
          <div className='AddRoom__form--photo'>
          <input type="file" multiple onChange={multipleFileChangedHandler}/>
          </div>

          <label htmlFor="">Precio</label>
          <input type="text" id="precio" />

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