import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import RoomCard from '../components/RoomCard';
import RoomieCard from '../components/RoomieCard';
import Carousel from '../components/Carousel';
import RoomDescription from '../components/RoomDescription';

const Home = () => {
    return(
        <>
            <Navbar />
            <Hero />
            <SearchBar />
            <RoomCard />
            <RoomieCard />
            <RoomDescription />
            <Carousel />
        </>
    );
};

export default Home;
