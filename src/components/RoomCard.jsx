import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; 
import { MdLocationOn } from 'react-icons/md'; 
import { MdAttachMoney } from 'react-icons/md'; 

import '../assets/styles/components/RoomCard.scss';

const RoomCard = () => {
    const [fav, setFav] = useState('#888888');

    // useEffect

    const addFav = () => {
        setFav('#E94560');
    }

    return(
        <div className='RoomCard'>
            <div className='RoomCard__img'>
                <img src="https://images.unsplash.com/photo-1600494448655-ae58f58bb945?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="photo_room"/>
            </div>
            <div className='RoomCard__title'>
                <div>
                    <h2>Habitación en zona centro</h2>
                    <p>Zona céntrica, adaptado para trabajo remoto.</p>
                </div>
                <AiFillHeart style={{color:fav}} onClick={addFav} className='RoomCard__title--fav' data-tip data-for='favTip' />

                <ReactTooltip id='favTip' place='top' effect='solid' >
                    Agrega a tus favoritos
                </ReactTooltip>

            </div>
            <div className='RoomCard__description'>
                <p className='RoomCard__description--location'><MdLocationOn size={23} /> Ciudad de México</p>
                <p className='RoomCard__description--price'><MdAttachMoney size={23} /> 3,500 / mensual</p>
            </div>
            <div className='RoomCard__roomie'>
                <div className='RoomCard__roomie--profile'>
                    <img src="https://images.unsplash.com/photo-1485528562718-2ae1c8419ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=781&q=80" alt=""/>
                    <div className='RoomCard__roomie--profile-text'>
                        <p>Eduardo Díaz</p>
                        <span>ROOMIE</span>
                    </div>
                </div>
                <Link to='room-details'>
                    <button className='RoomCard__roomie--button'>Ver más</button>
                </Link>
            </div>
        </div>
    );
};

export default RoomCard;
