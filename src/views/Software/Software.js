import React from 'react';

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'
import './Software.css';

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
    <div className="software">
        <div className="title">
            Software
        </div>
        <div className="subtitle">
            A record of the various software endeavors I am currently exploring.
        </div>
        <div className="polaroid-carousel">
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
        <div className="spacer" />
    </div>
  );
}

export default Software;
