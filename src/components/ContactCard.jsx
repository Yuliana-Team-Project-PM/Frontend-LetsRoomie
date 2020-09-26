import React from 'react';

import '../assets/styles/components/ContactCard.scss';

const ContactCard = () => {
    return(
        <div className='ContactCard'>
            <h2 className='ContactCard__title'>2,300 / mensual</h2>
            <button className='ContactCard__button'>Contáctame</button>
        </div>
    );
}

export default ContactCard;