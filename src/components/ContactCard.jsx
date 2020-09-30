import React, { useState, useEffect } from 'react';

import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

import '../assets/styles/components/ContactCard.scss';

const ContactCard = () => {
//     useEffect(() => {
//         fetch(API)
//             .then(response => response.json())
//             .then(data => setLugares(data));
//     }, []);

const sendWapp = () => {
    console.log('Sending');
}

    return(
        <div className='ContactCard'>
            <h2 className='ContactCard__title'>2,300 / mensual</h2>
            <h4 className='ContactCard__subtitle'>Contáctame vía</h4>
            <button className='ContactCard__button' onClick={sendWapp} >WhatsApp <AiOutlineWhatsApp size={18} /> </button>
            <button className='ContactCard__button'>Mail <AiOutlineMail size={18} /></button>
        </div>
    );
}

export default ContactCard;