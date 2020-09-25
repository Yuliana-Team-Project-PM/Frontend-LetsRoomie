import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import RoomCard from '../components/RoomCard';
import RoomieCard from '../components/RoomieCard';
import Carousel from '../components/Carousel';
import RoomDescription from '../components/RoomDescription';
import '../assets/styles/components/Home.scss';

const Home = () => {
    return(
        <>
            <Navbar />
            <Hero />
            <section className="HomeTitle">
                <h1>Tenemos la ubicación ideal para ti</h1>
            </section>
            <SearchBar />
            <section className="RoomSuguested">
                <div><RoomCard /></div>
                <div><RoomCard /></div>
                <div><RoomCard /></div>
                <div><RoomCard /></div>
                <div><RoomCard /></div>
                <div><RoomCard /></div>
            </section>
        </>
    );
};

export default Home;
