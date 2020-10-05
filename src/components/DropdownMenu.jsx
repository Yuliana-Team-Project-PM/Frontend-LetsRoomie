import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRoomCardinfo from '../hooks/useRoomCardinfo'
import Swal from 'sweetalert2'

import { IoIosArrowDown } from 'react-icons/io'; 
import '../assets/styles/components/DropdownMenu.scss'

const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    let name
    let ishost

    const showMenu = () => setIsActive(!isActive);
    const API=`https://api-letsroomie.herokuapp.com/user/${sessionStorage.getItem('userEmail')}`
    const userInfo=useRoomCardinfo(API)
    console.log(userInfo)
    userInfo.body.map(item=>{
        name=item.name
        ishost=item.ishost
    }
    )
    const cerrarSesion = () =>{
        sessionStorage.setItem('Token', "");
        sessionStorage.setItem('userEmail',"");
        Swal.fire("sesión cerrada")
        
    }

    useEffect(() => {
        const pageClickEvent = (e) => {
            // If the active element exists and is clicked outside of
            // console.log(e);
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };

        //if the item is active (open) then listen for clicks
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        }

    }, [isActive]);

    return(
        <div className='menu-container'>
            <button onClick={showMenu} className='menu-container__trigger'>
            <span>{name}</span>
                <IoIosArrowDown />
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><Link to='/profile'>Editar perfil</Link></li>
                    {console.log(ishost)}
                    {ishost ? <li><Link to='/addRoom'>Agregar habitación</Link></li> : <li><Link to='/addRoom'>Agregar habitación</Link></li> }
                    <li><Link to='/login' className='menu__exit' onClick={cerrarSesion}>Cerrar Sesión</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default DropdownMenu;