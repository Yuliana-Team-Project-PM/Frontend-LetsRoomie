import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Searchbar.scss';

import { MdSearch } from 'react-icons/md';

const SearchBar = () => {
    return(
        <div className='Searchbar'>
            {/* <MdSearch className='Searchbar__icon' size='1.75em'/> */}
            <input type='text' placeholder='Busca tu ubicación preferida' className='Searchbar__input' />
            <Link to='/SearchResults'>
                <button className='Searchbar__button'>Buscar</button>
            </Link>
        </div>
        
    );
};

export default SearchBar;
