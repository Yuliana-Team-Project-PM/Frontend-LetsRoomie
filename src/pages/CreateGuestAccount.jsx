import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import LogoHeader from '../components/LogoHeader';
import VerticalBanner from '../components/VerticalBanner';
import '../assets/styles/components/CreateGuestAccount.scss';
import Swal from 'sweetalert2'
import guest from '../assets/static/guest.png'
import Interest from '../components/Interest';


const CreateGuestAccount = ({ history }) => {
    const [selectedFile, setSelectedFile] = useState()
    const singleFileChangedHandler = ( event ) => {
        setSelectedFile(event.target.files[0])
       };

    const singleFileUploadHandler = (  ) => {
        const data = new FormData();
      // If file selected
        if ( selectedFile ) {
      data.append( 'profileImage', selectedFile, selectedFile.name );
      axios.post( 'https://api-letsroomie.herokuapp.com/api/profile/avatarUpload', data, {
          headers: {
           'accept': 'application/json',
           'Accept-Language': 'en-US,en;q=0.8',
           'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          }
         })
          .then( ( response ) => {
            alert("respuesta")
      if ( 200 === response.status ) {
            // If file size is larger than expected.
            if( response.data.error ) {
             if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
              ocShowAlert( 'Max size: 2MB', 'red' );
             } else {
              console.log( response.data );
      // If not the given file type
              ocShowAlert( response.data.error, 'red' );
             }
            } else {
             // Success
             let fileName = response.data;
             console.log( 'fileName', fileName );
             ocShowAlert( 'File Uploaded', '#3089cf' );
            }
           }
          }).catch( ( error ) => {
          // If another error
          ocShowAlert( error, 'red' );
         });
        } else {
         // if file not selected throw error
         ocShowAlert( 'Please upload file', 'red' );
        }
      };

    const guestCreation = () => {
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let telephone = document.getElementById("telephone").value
        let password = document.getElementById("password").value
        let descripción = document.getElementById("descripción").value
        
        singleFileUploadHandler()

        let guestData = {
            "email": email,
            "password": password,
            "phone": telephone,
            "name": name,
            "avatar": "https://letsroomie.s3.us-east-2.amazonaws.com/defualtImage-1601429025283.png",
            "isHost": false,
            "about": descripción,
            "i1": true,
            "i2": true,
            "i3": true,
            "i4": true,
            "i5": true,
            "i6": true,
            "i7": true,
            "i8": true,
            "i9": true,
            "i10": true
        }
        console.log(guestData)
        
        fetch('https://api-letsroomie.herokuapp.com/createUser', {
            method: 'POST',
            body: JSON.stringify(guestData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
                if (response.error === "") {
                    Swal.fire("Registro exitoso")
                    history.push("/login")
                } else {
                    Swal.fire("Registro no exitoso")
                }
            });
    }
    return (
        <>
            <LogoHeader />
            <section className="CreateGuestAccount">
                <div className="CreateGuestAccount__form">
                    <h2>Cuenta de huesped</h2>
                    <form action="" className="CreateGuestAccount__fields">
                        <label htmlFor="">Nombre Completo</label>
                        <input id="name" type="text" />
                        <label htmlFor="">Correo electrónico</label>
                        <input id="email" type="text" />
                        <label htmlFor="">Teléfono</label>
                        <input id="telephone" type="number" />
                        <label htmlFor="">Contraseña</label>
                        <input id="password" type="password" />
                        <label htmlFor="">Confirmar contraseña</label>
                        <input id="passwordConfirm" type="password" />
                        <label htmlFor="">Descripción</label>
                        <input id="descripción" type="text" />
                        <div className="CreateGuestAccount__fields--interest">
                            <Interest topic='Cine'/>
                            <Interest topic='Literatura' />
                            <Interest topic='Deporte' />
                            <Interest topic='Fiestas' />
                            <Interest topic='Estudio' />
                            <Interest topic='Música' />
                            <Interest topic='Amigos' />
                            <Interest topic='Fiestas' />
                            <Interest topic='Arte' />
                            <Interest topic='Trabajo' />
                        </div>
                        <label>Foto de perfil</label>
                        <input type="file" onChange={singleFileChangedHandler}/>

                        <button type="button" className='Login__card--button' onClick={guestCreation}>Crear cuenta</button>
                    </form>
                </div>
                <div><VerticalBanner ilustration={guest} /></div>
            </section>
        </>
    );
};

export default withRouter(CreateGuestAccount);