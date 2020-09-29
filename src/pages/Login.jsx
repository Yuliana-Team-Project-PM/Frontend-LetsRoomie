import React,{ useState , useEffect} from 'react';
import { Link } from 'react-router-dom';

import LogoHeader from '../components/LogoHeader';

import '../assets/styles/components/Login.scss';

const Login = () => {
    const[ login,setLogin]=useState([]);

    function LoginValidation(){
        alert("Botom clicked")
        /*let datosLogin={
            "email": "string",
            "password": "string"
            }
        useEffect(()=>{
            fetch('https://api-letsroomie.herokuapp.com/auth/signin',{
                method: 'POST',
                body: JSON.stringify(datosLogin),
                headers:{
                'Content-Type': 'application/json'
                    }
                })
                .then(response=>response.json())
                .then(data=>setLogin(data));
                },[]);
        console.log(login)*/
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
                        <button className='Login__card--button' onclick="LoginValidation()">Entrar</button>
                    </form>
                </div>
                <h4 className='Login__subtitle'>¿Aún no tienes una cuenta? <Link to='select-acount' >Crea una aquí</Link></h4>
            </div>
        </>
    );
};

export default Login;
