import React from 'react';

import './Onlo.css';

import Button from '../../components/Button';
import ExternalButton from '../../components/ExternalButton';

function Onlo() {
    return (
    <div class="onlo">
        <div className="backbutton">
            <Button link="/design" text="Back"/>
        </div>
        <div class="text-container">
            <text class="big-text">onlo</text>
            <text class="small-text"> 
            I was the sole UI/UX designer for Onlo, a startup aimed at connecting humans 
            residing in different locations to each other.
            I conducted UI/UX research and outlined user stories to identify the key components
            of the mobile application, and then translated those ideas into tangible high-fidelity
            prototypes in Figma.
            </text>
            <div class="spacer"> </div>

        </div>
        
    </div>
  );
}

export default Onlo;
