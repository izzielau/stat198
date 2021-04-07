import React from 'react';

import './TigerTalk.css';

import Button from '../../components/Button';
import ExternalButton from '../../components/ExternalButton';

function TigerTalk() {
    return (
    <div class="tigertalk">
        <div className="backbutton">
            <Button link="/design" text="Back"/>
        </div>
        <div class="text-container">
            <text class="big-text">tigertalk</text>
            <text class="small-text"> 
            I am a UI/UX design intern for TigerTalk, a startup that partners with speech coaches 
            to provide an intuitive platform for analyzing and giving feedback on their students' 
            performances. I've been collaborating closely with the executives since January 2021
            to produce high-fidelity mockups for our biweekly sprints. 
            </text>
            <text class="small-text"> 
            Each sprint, we tackle new go-to-market strategies. Some of our past iterations 
            have included full-functioning web apps, and we're currently working on a desktop 
            platform.
            </text>
            <div class="spacer"> </div>

            <ExternalButton text="Website" link="https://tigertalk.io/"/>
        </div>
        
    </div>
  );
}

export default TigerTalk;
