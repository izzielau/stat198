import React from 'react';

import './Polaroid.css';

const Polaroid = ({ image, name, position, link }) => {
  return (
    <div className="polaroid">
      <div className="imageContainer">
        {image != null ? image :
            null
        }
      </div>
      <div className="text">
        <h1>
          {name}
        </h1>
        <h2>
          {position}
        </h2>
      </div>
    </div>
  );
}

export default Polaroid;
