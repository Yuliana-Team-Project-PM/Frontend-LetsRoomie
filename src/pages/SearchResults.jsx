import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import RoomCard from '../components/RoomCard';
import FavoriteButton from '../components/FavoriteButton';

import '../assets/styles/components/Home.scss';

const SearchResults = () => {
    return(
        <>
            <Navbar />
            <SearchBar />
            <section className="RoomSuggestion">
                <h2 className="RoomSuggestion__title">54 Resultados en la ciudad de Bogotá</h2>
                <section className="RoomSuggestion__grid">
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                    <RoomCard />
                </section>
            </section>
            <FavoriteButton />
            <Footer />
        </>
    );
};

export default SearchResults;