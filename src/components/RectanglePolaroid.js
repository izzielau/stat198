import React from 'react';
import { Link } from 'react-router-dom';

import './RectanglePolaroid.css';
import blue from './../assets/blue.png';

const RectanglePolaroid = ({ image, title, subtitle, link }) => {
  return (
      <div className="rectangle-polaroid">
        <Link to={link} style={{ textDecoration: 'none' }}>
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
        </Link>
      </div>
  );
}

export default RectanglePolaroid;
