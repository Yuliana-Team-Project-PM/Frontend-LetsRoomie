import React from 'react';
import { withRouter } from 'react-router-dom';
import LogoHeader from '../components/LogoHeader';
import VerticalBanner from '../components/VerticalBanner';
import '../assets/styles/components/CreateGuestAccount.scss';
import Swal from 'sweetalert2'
import guest from '../assets/static/guest.png'
import Interest from '../components/Interest';


const CreateGuestAccount = ({ history }) => {
    const guestCreation = () => {
        let name = document.getElementById("name").value
        let email = document.getElementById("email").value
        let telephone = document.getElementById("telephone").value
        let password = document.getElementById("password").value

        let descripción = document.getElementById("descripción").value

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
                        <input type="file" name="file" />

                        <button type="button" className='Login__card--button' onClick={guestCreation}>Crear cuenta</button>
                    </form>
                </div>
                <div><VerticalBanner ilustration={guest} /></div>
            </section>
        </>
    );
};

export default withRouter(CreateGuestAccount);