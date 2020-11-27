import React from 'react';

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'
import './Software.css';

import SinglePagePDFViewer from "./../../components/pdf/single-page";
import LinkedinButton from "./../../components/LinkedinButton.js";
import GithubButton from "./../../components/GithubButton.js";

import resume from "./../../assets/resume-preview.png";
import view from "./../../assets/view.png";
import download from "./../../assets/download.png";

import PDF from "react-pdf-js";

function Software() {
  return (
      <div className="software">
        <div className="carousel">
            <div>
                <div className="title">
                    Resume
                </div>
                <div className="subtitle">
                    A record of the various software endeavors I've been able to explore.
                </div>
            </div>
            <a href="https://drive.google.com/file/d/1PqEBOfa-BTcA_8s2sghYpWHKMOYzbH9Z/view?usp=sharing" target="_blank">
                <img className="pdf" src={resume} />
            </a>
        </div>
        {/*
        <div className="carousel">
            <div className="button">
                <a href="https://drive.google.com/file/d/1h2cV6pAeuk1PJ1GUIkHcoM-o-OzLaORK/view?usp=sharing" target="_blank">
                    <img
                        className="icon"
                        src={view}
                    />
                </a>
                <div className="icon-subtitle">
                    View
                </div>
            </div>
            <div className="button">
                <a href="./IzzieLau_Resume.pdf" download>
                    <img
                        className="icon"
                        src={download}
                    />
                </a>
                <div className="icon-subtitle">
                    Download
                </div>
            </div>
        </div>
        */}

        <div className="spacer" />
      </div>
  );
}

export default Software;
