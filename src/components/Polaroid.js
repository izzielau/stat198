import React from 'react';
import { Link } from 'react-router-dom';

import './Polaroid.css';

const Polaroid = ({ image, name, position, link }) => {
  return (
        <div className="polaroid">
        <Link to={link} style={{ textDecoration: 'none' }}>
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
          </Link>
        </div>
  );
}

export default Polaroid;
