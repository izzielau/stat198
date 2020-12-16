import React from 'react';

import './Software.css';

import Header from './../../components/Header.js'
import BackButton from './../../components/BackButton.js'
import Polaroid from './../../components/Polaroid.js'
import ExternalPolaroid from './../../components/ExternalPolaroid.js'

import resume from "./../../assets/resume-preview.png";
import view from "./../../assets/view.png";
import download from "./../../assets/download.png";

import btcover from "./../../assets/bt-cover.png";
import sccover from "./../../assets/sc-cover.png";
import bdabcover from "./../../assets/bdab-cover.png";
import spotifycover from "./../../assets/spotify-cover.png";

import PDF from "react-pdf-js";

function Software() {
  return (
    <div class="software">
        <div class="glass">
            <Header />
            <div class="container">
                <div class="title">
                    Software
                </div>
                <div class="subtitle">
                    A collection of projects involving web development, data analytics, and machine learning.
                </div>
                <div class="polaroid-carousel">
                    <ExternalPolaroid
                        name="sproul.club"
                        image=<img className="image" src={sccover}/>
                        position="Frontend Engineer"
                        link="https://www.sproul.club/"
                    />
                    <Polaroid
                        name="Spotify API"
                        image=<img className="image" src={spotifycover}/>
                        position="Personal ML Project"
                        link="/spotify"
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Software;
