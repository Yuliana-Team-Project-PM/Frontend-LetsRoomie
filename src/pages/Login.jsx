import React,{ useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

import LogoHeader from '../components/LogoHeader';

import '../assets/styles/components/Login.scss';



const Login = () => {


    
    const LoginValidation=()=>{
        let emailUser=document.getElementById("email").value
        let psswUser=document.getElementById("password").value
        let datosLogin={
            "email": emailUser,
            "password": psswUser
            }
        fetch('https://api-letsroomie.herokuapp.com/auth/signin',{
            method: 'POST',
            body: JSON.stringify(datosLogin),
            headers:{
                'Content-Type': 'application/json'
                }
            })
            .then(function(response) {
                return response;
            })
            .then(function(data) {
                console.log('data = ', data);
                if(data.body===""){
                    alert("Usted no tiene aún una cuenta con nosotos")
                }else{
                    alert(data.body.token)
                    sessionStorage.setItem('Token', data.body.token);
                    //location.href ="http://localhost:8080/";
                }
            })
    }

    return(
        <>
            <LogoHeader />
            <div className='Login'>
                <h1 className='Login__title'>¡Qué bueno verte de nuevo!</h1>
                <div className='Login__card'>
                    <form action="">
                        <h3>Correo electrónico</h3>
                        <input type="email" name="" id="email"/>
                        <h3>Contraseña</h3>
                        <input type="password" name="" id="password"/>
                        <button type="button" className='Login__card--button' onClick={LoginValidation}>Entrar</button>
                    </form>
                </div>
                <h4 className='Login__subtitle'>¿Aún no tienes una cuenta? <Link to='select-acount' >Crea una aquí</Link></h4>
            </div>
        </>
    );
};

export default Login;
