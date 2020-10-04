import React from 'react';
import { Suspense,lazy} from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
const RoomCard=lazy(()=>import('../components/RoomCard'))
import FavoriteButton from '../components/FavoriteButton';
import useRoomCardinfo from '../hooks/useRoomCardinfo'
import '../assets/styles/components/Home.scss';

const Home = () => {
   const API='https://api-letsroomie.herokuapp.com/placea'
   const lugares=useRoomCardinfo(API)
   console.log(lugares)

    return(
        <>
            <Navbar />
            <main>
                <Hero />
                <SearchBar />
                <section className="RoomSuggestion">
                    <h1 className="RoomSuggestion__title">Tenemos la ubicación ideal para ti</h1>
                    <section className="RoomSuggestion__grid">
                        {lugares.body.map(item=>
                            <Suspense fallback={<h1>Cargando...</h1>}>
                            <RoomCard to={`/room-details/${item._id}`} key={item._id} {...item}/>
                            </Suspense>
                        )
                        }
                    </section>
                </section>
                <FavoriteButton />
            </main>
            <Footer />
        </>
    );
};

export default Home;
