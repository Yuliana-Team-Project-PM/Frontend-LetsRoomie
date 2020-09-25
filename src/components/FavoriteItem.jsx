import React from 'react';

import { AiFillHeart } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md'; 

import '../assets/styles/components/FavoriteItem.scss';

const FavoriteItem = () => {
    return(
        <div className='FavoriteItem'>
            <AiFillHeart className='FavoriteItem__fav' />
            <div className='FavoriteItem__text'>
                <h2 className='FavoriteItem__text--title'>Habitación / Zona Centro</h2>
                <p className='FavoriteItem__text--location'><MdLocationOn /> Bogotá, COL</p>
                <p className='FavoriteItem__text--description'>Habitación ideal para estudiantes o freelancaers. Cocina incluida.</p>
            </div>
            <div className='FavoriteItem__img'>
                <img src="https://images.unsplash.com/photo-1600489000360-34bd69182634?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80" alt=""/>
            </div>
        </div>
    );
};

export default FavoriteItem;
