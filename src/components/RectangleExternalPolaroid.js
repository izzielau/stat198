import React from 'react';
import { Link } from 'react-router-dom';

import './RectangleExternalPolaroid.css';
import blue from './../assets/blue.png';

const RectangleExternalPolaroid = ({ image, title, subtitle, link }) => {
  return (
      <div className="rectangle-external-polaroid">
        <a href={link} target="_blank" style={{ textDecoration: 'none' }}>
          <div class="imageContainer">
            {image != null ? image : <img class="image" src={blue}></img>}
          </div>
          <div class="textContainer">
            <text class="big-text">
              {title}
            </text>
            <text class="small-text">
              {subtitle}
            </text>
          </div>
        </a>
      </div>
  );
}

export default RectangleExternalPolaroid;
