import React, { useState } from 'react';

import '../assets/styles/components/Interest.scss';


const Interest = ({ topic }) => {
  const [interest, setInterest] = useState(false);

  const handleInterest = () => {
    setInterest(!interest);
    if(topic==="Cine"){
      alert("si")
      let cine=!interest
      console.log(!interest)
    }
  }

  return (
    <div
      className={`Interest ${interest ? 'showInterest' : 'notShowInterest'}`}
      onClick={handleInterest}>
      {topic}
    </div>
  );
}

export default Interest;
