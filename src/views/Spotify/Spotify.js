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
        <text class="big-text">machine learning & spotify</text>
        <div class="text-container">
            <text class="small-text"> 
            I've been playing piano since the age of four, singing (perhaps out-of-tune) since the age of six, and listening to Spotify at least three hours a day since I first got a Premium account in college.
            I discovered the Spotify API after researching a little bit about Spotify Wrapped and decided I wanted to do more research about my personal listening habits!
            </text>
            <text class="small-text"> 
            This page will dive into the projects that I was able to create using the API:
            </text>
            <text class="list-text">
            - Did exploratory data analysis to find my favorite genres and artists
            </text>
            <text class="list-text">
            - Trained a linear regression model to predict whether I'd like a song
            </text>
            <div class="spacer"></div>
            <text class="small-text">
            I used Jupyter Notebook, pandas, matplotlib, requests, seaborn, numpy, and scikit-learn for this project.
            </text>
        </div>
        
    </div>
  );
}

export default Spotify;
