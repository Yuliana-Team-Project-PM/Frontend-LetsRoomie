import React,{ useState , useEffect} from 'react';
import { Link,withRouter } from 'react-router-dom';

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
        console.log(datosLogin)
        fetch('https://api-letsroomie.herokuapp.com/signin',{
            method: 'POST',
            body: JSON.stringify(datosLogin),
            headers:{
                'Content-Type': 'application/json'
              }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if(response.error===""){
                    sessionStorage.setItem('Token', response.body.token);
                    //alert(sessionStorage.getItem('Token'))
                }else{
                    alert("No se encuentra registrado")
                }
            });
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
                        <Link to="/"><button type="button" className='Login__card--button' onClick={LoginValidation}>Entrar</button></Link>
                    </form>
                </div>
                <h4 className='Login__subtitle'>¿Aún no tienes una cuenta? <Link to='select-acount' >Crea una aquí</Link></h4>
            </div>
        </>
    );
};

export default withRouter(Login);
