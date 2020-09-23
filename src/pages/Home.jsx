import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';

const Home = () => {
    return(
        <>
            <Navbar />
            <Hero />
            <SearchBar />
        </>
    );
};

export default Home;
