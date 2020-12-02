import React from 'react';
import { Link } from 'react-router-dom';

import './ExternalPolaroid.css';

const ExternalPolaroid = ({ image, name, position, link }) => {
  return (
        <div className="external-polaroid">
            <a href={link} style={{ textDecoration: 'none' }} target="_blank">
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
            </a>
        </div>
  );
}

export default ExternalPolaroid;
