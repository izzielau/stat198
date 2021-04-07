import React from 'react';

import LandingButton from './../../components/LandingButton.js'
import Header from './../../components/Header.js'

import './Landing.css';
import profile from './../../assets/profile.jpg';
import linkedin from './../../assets/linkedin.png';
import github from './../../assets/github.png';
import gmail from './../../assets/gmail.png';

function Landing() {
  return (
      <div class="landing">
            <div class="text-container">
                <text class="small-text"> hey there i'm</text>
                <text class="big-text"> izzie lau!</text>
                <text class="small-text"> i’m interested in</text>
                <text class="big-text"> data-driven product design, data analytics, & frontend engineering </text>
                <text class="small-text"> and i'm currently </text>
                <text class="big-text"> a junior at uc berkeley</text>
            </div>
            <div class="button-container">
                <LandingButton link="/software" text="view my software projects" />
                <LandingButton link="/design" text="view my designs" />
            </div>
      </div>
  );
}

export default Landing;
