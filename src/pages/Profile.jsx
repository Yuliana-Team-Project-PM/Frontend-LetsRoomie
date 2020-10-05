import React, { useState } from 'react';
import { Link,withRouter } from 'react-router-dom';
import useRoomCardinfo from '../hooks/useRoomCardinfo'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import FavoriteButton from '../components/FavoriteButton';
import Interest from '../components/Interest';
import axios from 'axios';

import '../assets/styles/components/PerfilEdit.scss';

const Profile = ({history}) => {
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
             console.log( 'fileName', fileName );
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

      const API=`https://api-letsroomie.herokuapp.com/user/${sessionStorage.getItem('userEmail')}`
      const userInfo=useRoomCardinfo(API)
      console.log("info usuario")
      console.log(userInfo)
      let avatar
      let name
      let email
      let phone
      let about
      userInfo.body.map(item=>{
        avatar=item.avatar
        name=item.name
        email=item.email
        phone=item.phone
        about=item.about
      }
    )

    const onClickHandler = () => {
        // Envío de datos
        let idUser = sessionStorage.getItem('idUser')
        let nombre = document.getElementById("nombre").value
        let email = document.getElementById("email").value
        let contraseña = document.getElementById("contraseña").value
        let telefono = document.getElementById("telefono").value
        let comentarios = document.getElementById("comentarios").value

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

        singleFileUploadHandler()

        let updateUser={
            "email": email,
            "password": contraseña,
            "phone": telefono,
            "name": nombre,
            "avatar": "string",
            "isHost": true,
            "about": comentarios,
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
        //console.log(updateUser)
        //console.log(`https://api-letsroomie.herokuapp.com/users/${idUser}`)
        fetch(`https://api-letsroomie.herokuapp.com/users/${idUser}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(updateUser)
          })
          .then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => {
              console.log(response)
          });
        history.push("/")
        
          
    }


    return (
        <>
            <Navbar />
            <SearchBar />
            <section className="PerfilEdit">
                <div className="PerfilEdit__Title">
                    <h2>Edita tu perfil</h2>
                </div>
                <div className="PerfilEdit__photo">
                    {/* <p>Foto de perfil:</p> */}
                    <img src={avatar} alt="Foto de perfil"/>
                    <input type="file" name="file" onChange={singleFileChangedHandler}/>
                </div>
                <div className="PerfilEdit__text">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" name="" id="nombre" placeholder={name}/>
                    <label htmlFor="">Email:</label>
                    <input type="text" id="email" placeholder={email}/>
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" id="contraseña"/>
                    <label htmlFor="">Teléfono:</label>
                    <input type="number" id="telefono" placeholder={phone}/>
                    <div className="PerfilEdit__PersonalDesc">
                        <label htmlFor="">
                            Descripción personal:
                            </label>
                        <textarea placeholder={about} id="comentarios" name="comentarios" rows="10" cols="30"></textarea>
                    </div>
                    <label htmlFor="">Elige tus intereses:</label>
                    <div className="PerfilEdit__interest">
                        <label className="PerfilEdit__interest--item">
                            <input type="checkbox" id="cine" value="" />
                                Cine
                            </label>
                        <label className="PerfilEdit__interest--item">
                            <input type="checkbox" id="literature" value="" />
                                Literatura
                            </label>
                        <label className="PerfilEdit__interest--item">
                            <input type="checkbox" id="sports" value="" />
                                Deporte
                            </label>
                        <label className="PerfilEdit__interest--item">
                            <input type="checkbox" id="party" value="" />
                                Fiestas
                            </label>
                        <label className="PerfilEdit__interest--item">
                            <input type="checkbox" id="study" value="" />
                                Estudio
                            </label>
                        <label className="PerfilEdit__interest--item">
                            <input type="checkbox" id="music" value="" />
                                Música
                            </label>
                        <label className="PerfilEdit__interest--item">
                            <input type="checkbox" id="friends" value="" />
                                Amigos
                            </label>
                        <label className="PerfilEdit__interest--item">
                            <input type="checkbox" id="travels" value="" />
                                Viajes
                            </label>
                        <label className="PerfilEdit__interest--item">
                            <input type="checkbox" id="art" value="" />
                                Arte
                            </label>
                        <label className="PerfilEdit__interest--item">
                            <input type="checkbox" id="work" value="" />
                                Trabajo
                            </label>
                    </div>

                    <button className='PerfilEdit__button' onClick={onClickHandler}>Guardar</button>

                </div>

            </section>
            <FavoriteButton />
            <Footer />

        </>
    );
};

export default withRouter(Profile);
