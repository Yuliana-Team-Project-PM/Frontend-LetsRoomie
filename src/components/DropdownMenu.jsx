import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRoomCardinfo from '../hooks/useRoomCardinfo'


import { IoIosArrowDown } from 'react-icons/io'; 
import '../assets/styles/components/DropdownMenu.scss'

const DropdownMenu = () => {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const showMenu = () => setIsActive(!isActive);
    const API=`https://api-letsroomie.herokuapp.com/userByEmail/${sessionStorage.getItem('userEmail')}`
    console.log(API)
    const userInfo=useRoomCardinfo(API)
    console.log(userInfo)

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
                <span>User Name</span>
                <IoIosArrowDown />
            </button>
            <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                    <li><Link to='/profile'>Editar perfil</Link></li>
                    <li><Link to='/addRoom'>Agregar habitación</Link></li>
                    <li><Link to='/' className='menu__exit'>Cerrar Sesión</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default DropdownMenu;