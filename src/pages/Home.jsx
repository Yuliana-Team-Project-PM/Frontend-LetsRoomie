import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import RoomCard from '../components/RoomCard';
import FavoriteItem from '../components/FavoriteItem';
import Carousel from '../components/Carousel';

const Home = () => {
    return(
        <>
            <Navbar />
            <Carousel />
        </>
    );
};

export default Home;
