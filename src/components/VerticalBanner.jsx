import React from 'react';
import '../assets/styles/components/VerticalBanner.scss';

const VerticalBanner = ({ ilustration }) => {
    return(
        <div className="VerticalBanner">
            <img src={ilustration} alt="Vertical Banner Image"/>
        </div>
    );
};

export default VerticalBanner;