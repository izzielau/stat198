import React from 'react';

import './Spotify.css';

import Button from '../../components/Button';
import ExternalButton from '../../components/ExternalButton';

function Spotify() {
    return (
    <div class="spotify">
        <div className="backbutton">
            <Button link="/software" text="Back"/>
        </div>
        <div class="text-container">
            <text class="big-text">blueprint</text>
            <text class="small-text"> 
            Undergoing construction.
            </text>
        </div>
        
    </div>
  );
}

export default Spotify;
