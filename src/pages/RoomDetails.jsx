import React from 'react';

import '../assets/styles/components/RoomDetails.scss';

import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel';
import RoomDescription from '../components/RoomDescription';
import RoomieCard from '../components/RoomieCard';
import ContactCard from '../components/ContactCard';

const RoomDetails = () => {
    return(
        <>
            <Navbar />
            <div className='RoomDetails'>
                <Carousel />
                <div className='RoomDetails__grid'>
                    <RoomDescription />
                    <RoomieCard />
                    <div className='RoomDetails__grid--contact'>
                        <ContactCard />

                    </div>
                </div>
            </div>
        </>
    );
};

export default RoomDetails;