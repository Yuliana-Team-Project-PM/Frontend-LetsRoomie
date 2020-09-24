import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import RoomieCard from '../components/RoomieCard';
import RoomDescription from '../components/RoomDescription';

const Home = () => {
    return(
        <>
            <Navbar />
            <Hero />
            <SearchBar />
            <RoomDescription />
        </>
    );
};

export default Home;
