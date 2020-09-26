import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillHeart } from 'react-icons/ai';

import '../assets/styles/components/FavoriteButton.scss';

const FavoriteButton = () => {
    return(
        <Link to='/favorites'>
            <div className='FavoriteButton'>
                <AiFillHeart className='FavoriteButton__heart' />
            </div>
        </Link>
    );
};

export default FavoriteButton;