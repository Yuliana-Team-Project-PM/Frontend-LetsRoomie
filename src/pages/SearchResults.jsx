import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import RoomCard from '../components/RoomCard';
import FavoriteButton from '../components/FavoriteButton';

import useRoomCardinfo from '../hooks/useRoomCardinfo'

import '../assets/styles/components/Home.scss';

const SearchResults = () => {
    var city = sessionStorage.getItem('citySearch');
    const API=`https://api-letsroomie.herokuapp.com/placec/${city}`
    const lugares=useRoomCardinfo(API)
    console.log(lugares)
    

    return(
        <>
            <Navbar />
            <section className="RoomSuggestion">
                <h2 className="RoomSuggestion__title">{lugares.body.length} Resultados en la ciudad de {city}</h2>
                <section className="RoomSuggestion__grid">
                {lugares.body.map(item=>
                        <RoomCard {...item}/>
                    )
                    }
                </section>
            </section>
            <FavoriteButton />
            <Footer />
        </>
    );
};

export default SearchResults;