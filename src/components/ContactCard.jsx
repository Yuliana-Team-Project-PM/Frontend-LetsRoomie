import React, { useState, useEffect } from 'react';

import { AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

import '../assets/styles/components/ContactCard.scss';
import useRoomCardinfo from '../hooks/useRoomCardinfo';

const ContactCard = ({price, user}) => {

    return(
        <div className='ContactCard'>
            <h2 className='ContactCard__title'>${price} / mensual</h2>
            <h4 className='ContactCard__subtitle'>Contáctame vía</h4>
            <a href="https://api.whatsapp.com/send?phone=573166245285&text= Hola!%20Quiero%20ser%20tu%20Roomie!" target="_blank" className='ContactCard__button'>WhatsApp</a>
            <a  href="mailto:sebastian960714@gmail.com" target="_blank" className='ContactCard__button'>Mail</a>
        </div>
    );
}

export default ContactCard;