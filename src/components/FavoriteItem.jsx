import React from 'react';

import { AiFillHeart } from 'react-icons/ai';
import { MdLocationOn } from 'react-icons/md'; 

import '../assets/styles/components/FavoriteItem.scss';

const FavoriteItem = ({description,city,namePlace,location,images}) => {
    return(
        <section className='FavoriteItem'>
            <div className='FavoriteItem__icon'>
                <AiFillHeart className='FavoriteItem__icon--heart' />
            </div>
            <div className='FavoriteItem__text'>
            <h2 className='FavoriteItem__text--title'>{namePlace}/ {location}</h2>
                <p className='FavoriteItem__text--location'><MdLocationOn />{city}</p>
                <p className='FavoriteItem__text--description'>{description}</p>
            </div>
            <div className='FavoriteItem__img'>
                <img src={images[0]} alt=""/>
            </div>
        </section>
    );
};

export default FavoriteItem;
