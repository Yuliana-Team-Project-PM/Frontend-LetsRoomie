import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import LogoHeader from '../components/LogoHeader';
import Swal from 'sweetalert2'
import VerticalBanner from '../components/VerticalBanner';
import Interest from '../components/Interest';
import axios from 'axios';
import '../assets/styles/components/CreateGuestAccount.scss';

import host from '../assets/static/host.png';

const CreateHostAccount = ({ history }) => {
    const [selectedFile, setSelectedFile] = useState()
    const singleFileChangedHandler = ( event ) => {
        //alert("primer evento")
        setSelectedFile(event.target.files[0])
       };

    const singleFileUploadHandler = (  ) => {
        const data = new FormData();
      // If file selected
        if ( selectedFile ) {
      data.append( 'file', selectedFile, selectedFile.name );
      axios.post( 'https://api-letsroomie.herokuapp.com/api/profile/avatarUpload', data, {
          headers: {
           'accept': 'application/json',
           'Accept-Language': 'en-US,en;q=0.8',
           'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          }
         })
          .then( ( response ) => {
            alert("respuesta")
              console.log(response)
      if ( 201 === response.status ) {
            // If file size is larger than expected.
            if( response.data.error ) {
             if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
              //ocShowAlert( 'Max size: 2MB', 'red' );
             } else {
              console.log( response.data );
      // If not the given file type
              //ocShowAlert( response.data.error, 'red' );
             }
            } else {
             // Success
             let fileName = response.data;
             console.log( 'fileName', fileName.body.location );

             let avatar=fileName.body.location
             let name = document.getElementById("name").value
             let email = document.getElementById("email").value
             let telephone = document.getElementById("telephone").value
             let password = document.getElementById("password").value
             let descripción = document.getElementById("descripción").value
             let cine=document.getElementById("cine").checked
             let literature=document.getElementById("literature").checked
             let sports=document.getElementById("sports").checked
             let party=document.getElementById("party").checked
             let study=document.getElementById("study").checked
             let music=document.getElementById("music").checked
             let friends=document.getElementById("friends").checked
             let travels=document.getElementById("travels").checked
             let art=document.getElementById("art").checked
             let work=document.getElementById("work").checked
     
     
     
             let guestData = {
                 "email": email,
                 "password": password,
                 "phone": telephone,
                 "name": name,
                 "avatar": avatar,
                 "isHost": true,
                 "about": descripción,
                 "movietheater": cine,
                 "literature": literature,
                 "sports": sports,
                 "parties": party,
                 "study": study,
                 "music": music,
                 "friends": friends,
                 "travel": travels,
                 "art": art,
                 "work": work
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
                     console.log("La respuesta")
                     console.log(response.error)
                     if (response.error === "") {
                         Swal.fire("Registro exitoso")
                         history.push("/login")
                     }              
                     if (response.error === "The email address is already in use by another account.") {
                         Swal.fire("El correo ya está en uso")
                     }
     
                 });

            // ocShowAlert( 'File Uploaded', '#3089cf' );
            }
           }
          }).catch( ( error ) => {
          // If another error
          //ocShowAlert( error, 'red' );
         });
        } else {
         // if file not selected throw error
         //ocShowAlert( 'Please upload file', 'red' );
        }
      };

    const guestCreation = () => {
        singleFileUploadHandler()
    }

    return (
        <>
            <LogoHeader />
            <div className="CreateGuestAccount">
                <div className="CreateGuestAccount__form">
                    <h2>Cuenta de anfitrión</h2>
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
                        <label>Intereses</label>
                        <div className="CreateGuestAccount__fields--interest">
                            <label className="CreateGuestAccount__fields--interest-label">
                                <input type="checkbox" id="cine" value="" />
                                Cine
                            </label>
                            <label className="CreateGuestAccount__fields--interest-label">
                                <input type="checkbox" id="literature" value="" />
                                Literatura
                            </label>
                            <label className="CreateGuestAccount__fields--interest-label">
                                <input type="checkbox" id="sports" value="" />
                                Deporte
                            </label>
                            <label className="CreateGuestAccount__fields--interest-label">
                                <input type="checkbox" id="party" value="" />
                                Fiestas
                            </label>
                            <label className="CreateGuestAccount__fields--interest-label">
                                <input type="checkbox" id="study" value="" />
                                Estudio
                            </label>
                            <label className="CreateGuestAccount__fields--interest-label">
                                <input type="checkbox" id="music" value="" />
                                Música
                            </label>
                            <label className="CreateGuestAccount__fields--interest-label">
                                <input type="checkbox" id="friends" value="" />
                                Amigos
                            </label>
                            <label className="CreateGuestAccount__fields--interest-label">
                                <input type="checkbox" id="travels" value="" />
                                Viajes
                            </label>
                            <label className="CreateGuestAccount__fields--interest-label">
                                <input type="checkbox" id="art" value="" />
                                Arte
                            </label>
                            <label className="CreateGuestAccount__fields--interest-label">
                                <input type="checkbox" id="work" value="" />
                                Trabajo
                            </label>
                        </div>
                        <label>Foto de perfil</label>
                        <input type="file" name="file" onChange={singleFileChangedHandler}/>

                        <button type="button" className='Login__card--button' onClick={guestCreation}>Crear cuenta</button>
                    </form>
                </div>
                <div><VerticalBanner ilustration={host} /></div>
            </div>
        </>
    );
};

export default withRouter(CreateHostAccount);