import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'; 
import { MdLocationOn } from 'react-icons/md'; 
import { MdAttachMoney } from 'react-icons/md'; 

import '../assets/styles/components/RoomCard.scss';

const RoomCard = ({images,description,namePlace,location,to,price,user}) => {
    const [fav, setFav] = useState('#888888');

    // useEffect

    const addFav = () => {
        setFav('#E94560');
    }

    return(
        <div className='RoomCard'>
            <div className='RoomCard__img'>
                <img src={images[0]} alt='imagen de habitación'/>
            </div>
            <div className='RoomCard__title'>
                <div>
                    <h2>{namePlace}</h2>
                    <p>{description.substr(0,200)}...</p>
                </div>
                <AiFillHeart style={{color:fav}} onClick={addFav} className='RoomCard__title--fav' data-tip data-for='favTip' />

                <ReactTooltip id='favTip' place='top' effect='solid' >
                    Agrega a tus favoritos
                </ReactTooltip>

            </div>
            <div className='RoomCard__description'>
                <p className='RoomCard__description--location'><MdLocationOn size={23} />{location} </p>
                <p className='RoomCard__description--price'><MdAttachMoney size={23} />{price} / mensual</p>
            </div>
            <div className='RoomCard__roomie'>
                <div className='RoomCard__roomie--profile'>
                    <img src={user.avatar} alt="foto de perfil"/>
                    <div className='RoomCard__roomie--profile-text'>
                        <p>{user.name}</p>
                        <span>ROOMIE</span>
                    </div>
                </div>
                <Link to={to}>
                    <button className='RoomCard__roomie--button'>Ver más</button>
                </Link>
            </div>
        </div>
    );
};

export default RoomCard;
