import React, { useState } from 'react';

import '../assets/styles/components/Interest.scss';

const Interest = ({ topic }) => {
  const [interest, setInterest] = useState(false);

  const handleInterest = () => {
    setInterest(!interest);
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
