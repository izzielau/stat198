import React from 'react';

import './Sproul.css';

import Button from '../../components/Button';
import ExternalButton from '../../components/ExternalButton';

function Sproul() {
    return (
    <div class="sproul">
        <div className="backbutton">
            <Button link="/design" text="Back"/>
        </div>
        <div class="text-container">
            <text class="big-text">sproul.club</text>
            <text class="small-text"> 
            As a product designer for the recruitment division of sproul.club, I've worked with
            my team to design and categorize more than 300+ student survey responses. We did a 
            conducive analysis of these responses in order to identify features to fix, improve, 
            and implement. We then drafted high-fidelity prototypes of these features in Figma
            for engineers to implement.
            </text>
            <div class="spacer"> </div>

            <ExternalButton text="Website" link="https://sproul.club/"/>
        </div>
        
    </div>
  );
}

export default Sproul;
