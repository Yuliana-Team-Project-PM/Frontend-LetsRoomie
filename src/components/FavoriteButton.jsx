import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillHeart } from 'react-icons/ai';

import '../assets/styles/components/FavoriteButton.scss';


const FavoriteButton = () => {
    let pathway
    if(sessionStorage.getItem('Token')===""){
        pathway='/login'
    }else{
        pathway='/favorites'
    }
    return(
        <Link to={pathway}>
            <div className='FavoriteButton' id="FavoriteButton">
                <AiFillHeart className='FavoriteButton__heart' />
            </div>
        </Link>
    );
};

export default FavoriteButton;