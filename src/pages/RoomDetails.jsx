import React from 'react';
import Footer from '../components/Footer';

import '../assets/styles/components/RoomDetails.scss';

import LogoHeader from '../components/LogoHeader';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import RoomDescription from '../components/RoomDescription';
import RoomieCard from '../components/RoomieCard';
import ContactCard from '../components/ContactCard';
import useRoomCardinfo from '../hooks/useRoomCardinfo'

const RoomDetails = (props) => {
    const { match } = props
    let roomId = match.params.roomIndex
    const API = `https://api-letsroomie.herokuapp.com/place/${roomId}`
    const RoomInfo = useRoomCardinfo(API)
    console.log(RoomInfo)

    return(
        <>
            <LogoHeader />
            <section className='RoomDetails'>
                <Carousel {...RoomInfo.body.images}/>
                <div className='RoomDetails__grid'>
                    <RoomDescription {...RoomInfo.body} />
                    <RoomieCard />
                    <div className='RoomDetails__grid--contact'>
                        <ContactCard {...RoomInfo.body} />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default RoomDetails;