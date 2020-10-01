import React, { useState, useEffect } from 'react';

import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

import '../assets/styles/components/ContactCard.scss';
import useRoomCardinfo from '../hooks/useRoomCardinfo';

const ContactCard = ({price, user}) => {
    // const [phone, setPhone] = useState({
    //     "error": "",
    //     "body": ""
    //   })

    // useEffect(() => {
    //     fetch(`https://api-letsroomie.herokuapp.com/contact-wapp?_id=${user}`)
    //         .then(response => response.json())
    //         .then(data => setPhone(data))
    // }, []);

    // console.log(phone);



    const sendWapp = () => {
        //Ir a whats
        const wapp = `https://api-letsroomie.herokuapp.com/contact-wapp?_${user}`;
        <a href={wapp} />
    }
        console.log(user)
        const phone = useRoomCardinfo(`https://api-letsroomie.herokuapp.com/contact-wapp/${user}`)


        const waap = phone.body
        console.log(`test ${phone}`);

    return(
        <div className='ContactCard'>
            <h2 className='ContactCard__title'>${price} / mensual</h2>
            <h4 className='ContactCard__subtitle'>Contáctame vía</h4>
            <button className='ContactCard__button'>WhatsApp <AiOutlineWhatsApp size={18} /></button>
            <button className='ContactCard__button'>Mail <AiOutlineMail size={18} /></button>
        </div>
    );
}

export default ContactCard;