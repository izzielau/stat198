import React from 'react';

import './Polaroid.css';

const Polaroid = ({ image, name, position, link }) => {
  return (
    <a href={link != null ? `${link}` : "/"} style={{ textDecoration: "none"}}>
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
    </a>
  );
}

export default Polaroid;
