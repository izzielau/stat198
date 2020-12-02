import React from 'react';

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'
import './Software.css';

import ExternalPolaroid from './../../components/ExternalPolaroid.js'

import resume from "./../../assets/resume-preview.png";
import view from "./../../assets/view.png";
import download from "./../../assets/download.png";

import btcover from "./../../assets/bt-cover.png";
import sccover from "./../../assets/sc-cover.png";
import bdabcover from "./../../assets/bdab-cover.png";

import PDF from "react-pdf-js";

function Software() {
  return (
      <div className="software">
        <div className="carousel">
            <div>
                <div className="title">
                    Software
                </div>
                <div className="subtitle">
                    A record of the various software endeavors I've been able to explore.
                    Here are some of my past and current projects:
                </div>
                <div className="polaroid-carousel">
                    <ExternalPolaroid
                        name="BerkeleyTime"
                        image=<img className="image" src={btcover}/>
                        position="Backend Engineer"
                        link="http://berkeleytime.com/"
                    />
                    <ExternalPolaroid
                        name="sproul.club"
                        image=<img className="image" src={sccover}/>
                        position="Frontend Engineer"
                        link="https://www.sproul.club/"
                    />
                    <ExternalPolaroid
                        name="Big Data"
                        image=<img className="image" src={bdabcover}/>
                        position="Data Analyst"
                        link="https://bd.berkeley.edu/index.html"
                    />
                </div>
            </div>
            <a href="https://drive.google.com/file/d/1PqEBOfa-BTcA_8s2sghYpWHKMOYzbH9Z/view?usp=sharing" target="_blank">
                <img className="pdf" src={resume} />
            </a>
        </div>
        <div className="spacer" />
      </div>
  );
}

export default Software;
