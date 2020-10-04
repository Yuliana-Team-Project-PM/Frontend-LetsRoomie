import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import FavoriteButton from '../components/FavoriteButton';
import Interest from '../components/Interest';

import '../assets/styles/components/PerfilEdit.scss';

const Profile = () => {
    const [selectedFile, setSelectedFile] = useState()
    const onChangeHandler = event => {
        setSelectedFile(event.target.files[0])
    }

    const onClickHandler = () => {
        const data = new FormData()
        data.append('galleryImage ', btoa(selectedFile))
        fetch("https://api-letsroomie.herokuapp.com/api/profile/multipleUpload", {
            method: "POST",
            body: data
        });

        // Envío de datos
        let idUser = sessionStorage.getItem('idUser')
        let nombre = document.getElementById("nombre").value
        let email = document.getElementById("email").value
        let contraseña = document.getElementById("contraseña").value
        let telefono = document.getElementById("telefono").value
        let comentarios = document.getElementById("comentarios").value

        let updateUser = {
            "email": { email },
            "password": { contraseña },
            "phone": { telefono },
            "name": { nombre },
            "avatar": "string",
            "isHost": true,
            "about": { comentarios },
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
        console.log(updateUser)
        console.log(`https://api-letsroomie.herokuapp.com/users/${idUser}`)
        fetch(`https://api-letsroomie.herokuapp.com/users/${idUser}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(updateUser)
        });

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
                    <img src="https://resizer.codigounico.com/resizer/resizer.php?imagen=https://www.codigounico.com/wp-content/uploads/sites/2/2020/01/las-mujeres-mas-sexys-de-instagram-en-2020-2.jpg&nuevoancho=750&crop=0" alt="foto de perfil" />
                    <input type="file" name="file" onChange={onChangeHandler} />
                </div>
                <div className="PerfilEdit__text">
                    <label htmlFor="">Nombre:</label>
                    <input type="text" name="" id="" />
                    <label htmlFor="">Email:</label>
                    <input type="text" />
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" />
                    <div className="PerfilEdit__PersonalDesc">
                        <label htmlFor="">
                            Descripción personal:
                            </label>
                        <textarea name="comentarios" rows="10" cols="30"></textarea>
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

export default Profile;
