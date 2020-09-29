import React,{ useState , useEffect} from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import RoomCard from '../components/RoomCard';
import FavoriteButton from '../components/FavoriteButton';
import useRoomCardinfo from '../hooks/useRoomCardinfo'
import '../assets/styles/components/Home.scss';

const Home = () => {
   const lugares=useRoomCardinfo()
    return(
        <>
            <Navbar />
            <Hero />
            <SearchBar />
            <section className="RoomSuggestion">
                <h1 className="RoomSuggestion__title">Tenemos la ubicación ideal para ti</h1>
                <section className="RoomSuggestion__grid">
                    {lugares.body.map(item=>
                        <RoomCard key={item._id} {...item}/>

                    )
                    }
                </section>
            </section>
            <FavoriteButton />
            <Footer />
        </>
    );
};

export default Home;
