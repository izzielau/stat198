import React from 'react';

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'

import './Spotify.css';
import genres from "./../../assets/spotify-demos/genres.png"

function Spotify() {
  return (
      <div>
          <div className="backbutton">
              <BackButton link="/software" text="back to projects"/>
          </div>
          <div className="spotify">
              <div className="title">
                  Spotify API
              </div>
              <div className="subtitle">
                  Overview
              </div>
              <div className="text">
                  I've been playing piano since the age of four, singing (perhaps out-of-tune) since the age of six, and
                  listening to Spotify at least an hour a day since I first got a Premium account in college.
              </div>
              <div className="text">
                  I discovered the Spotify API after researching a little bit about Spotify Wrapped and decided I wanted
                  to do more research about my personal listening habits!
              </div>
              <div className="text">
                  This page will dive into the projects that I was able to create using the API:
                  <ul>
                      <li>Did exploratory data analysis to find my favorite genres and artists</li>
                      <li>Trained a linear regression model to predict whether I'd like a song</li>
                  </ul>
              </div>
              <div className="text">
              I used Jupyter Notebook, pandas, matplotlib, requests, seaborn, numpy, and scikit-learn for this project.
              </div>
              <div className="spacer" />
              <div className="subtitle">
                  Exploration
              </div>
              <img className="image" src={genres} />
          </div>
      </div>
  );
}

export default Spotify;
