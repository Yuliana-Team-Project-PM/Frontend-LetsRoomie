import React from 'react';

import LogoHeader from '../components/LogoHeader';
import VerticalBanner from '../components/VerticalBanner';
import '../assets/styles/components/CreateGuestAccount.scss';

import host from '../assets/static/host.png';

const CreateHostAccount = () => {

    const guestCreation=()=>{
        let name=document.getElementById("name").value
        let email=document.getElementById("email").value
        let telephone=document.getElementById("telephone").value
        let password=document.getElementById("password").value
        let descripción=document.getElementById("descripción").value

        let guestData={
            "email": email,
            "password": password,
            "phone": telephone,
            "name": name,
            "avatar": "https://letsroomie.s3.us-east-2.amazonaws.com/defualtImage-1601429025283.png",
            "isHost": true,
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
        fetch('https://api-letsroomie.herokuapp.com/createUser',{
            method: 'POST',
            body: JSON.stringify(guestData),
            headers:{
                'Content-Type': 'application/json'
              }
            })
            .then(res => res.json())
            .then(response => {
                console.log(response.error)
                if(response.error===""){
                    alert("Registro exitoso")
                    //Cuadrar tema de redirecciones
                    //window.location.href ="http://localhost:8080/";
                }else{
                    alert("Registro no exitoso")
                }

            });
    }

    return(
        <>  
            <LogoHeader />
            <div className="CreateGuestAccount">
                <div className="CreateGuestAccount-form">
                    <h2>Cuenta de anfitrión</h2>
                    <form action="" className="CreateGuestAccount__fields">
                    <label htmlFor="">Nombre Completo</label>
                        <input id="name" type="text"/>
                        <label htmlFor="">Correo electrónico</label>
                        <input id="email" type="text"/>
                        <label htmlFor="">Teléfono</label>
                        <input id="telephone" type="number"/>
                        <label htmlFor="">Contraseña</label>
                        <input id="password" type="password"/>
                        <label htmlFor="">Confirmar contraseña</label>
                        <input id="passwordConfirm" type="password"/>
                        <label htmlFor="">Descripción</label>
                        <input id="descripción" type="text"/>
                        <button type="button" className='Login__card--button' onClick={guestCreation}>Crear cuenta</button>
                    </form>
                </div>
                <div><VerticalBanner ilustration={host} /></div>
            </div>
        </>
    );
};

export default CreateHostAccount;