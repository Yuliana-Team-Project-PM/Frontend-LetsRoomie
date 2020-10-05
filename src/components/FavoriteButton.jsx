import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { AiFillHeart } from 'react-icons/ai';

import '../assets/styles/components/FavoriteButton.scss';


const FavoriteButton = () => {
    let pathway
    if (sessionStorage.getItem('Token') === "") {
        pathway = '/login'
    } else {
        pathway = '/favorites'
    }
    return (
        <>
            <Link to={pathway}>
                <div className='FavoriteButton' id="FavoriteButton" data-tip data-for='favGo'>
                    <AiFillHeart className='FavoriteButton__heart' />
                </div>
            </Link>

            <ReactTooltip id='favGo' place='top' effect='solid'>
                Ve a tus favoritos
            </ReactTooltip>
        </>
    );
};

export default FavoriteButton;