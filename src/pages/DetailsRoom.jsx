import React from 'react';

import '../assets/styles/components/RoomDetails.scss';

import LogoHeader from '../components/LogoHeader';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import RoomDescription from '../components/RoomDescription';
import RoomieCard from '../components/RoomieCard';
import ContactCard from '../components/ContactCard';
import useRoomCardinfo from '../hooks/useRoomCardinfo'
import Footer from '../components/Footer';

const DetailsRoom = (props) => {
  const { match } = props
  let roomId = match.params.roomIndex
  const API = `https://api-letsroomie.herokuapp.com/place/${roomId}`
  const RoomInfo = useRoomCardinfo(API)
  console.log(RoomInfo)

  return (
    <>
      <Navbar />
      <section className='RoomDetails'>
        <Carousel {...RoomInfo.body.images} />
        <div className='RoomDetails__grid'>
          <RoomDescription {...RoomInfo.body} />
          <RoomieCard {...RoomInfo.body.user} />
          <div className='RoomDetails__grid--contact'>
            <ContactCard {...RoomInfo.body} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DetailsRoom;
