import React from 'react';
import { Link } from 'react-router-dom';



import '../assets/styles/components/Searchbar.scss';

import { MdSearch } from 'react-icons/md';

const SearchBar = () => {
    const Busqueda= ()=>{
        let city=document.getElementById("Searchbar__input").value
        sessionStorage.setItem('citySearch',city);
    }
    return(
        <div className='Searchbar'>
            <input type='text' placeholder='Busca tu ubicación preferida' className='Searchbar__input' id="Searchbar__input" />
            <Link to='/SearchResults'>
                <button className='Searchbar__button' onClick={Busqueda}>Buscar</button>
            </Link>
        </div>
        
    );
};

export default SearchBar;
