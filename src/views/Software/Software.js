import React from 'react';

import NavigationButton from './../../components/NavigationButton.js'
import BackButton from './../../components/BackButton.js'
import './Software.css';

import SinglePagePDFViewer from "./../../components/pdf/single-page";
import LinkedinButton from "./../../components/LinkedinButton.js";
import GithubButton from "./../../components/GithubButton.js";

import resume from "./../../assets/resume.pdf";
import view from "./../../assets/view.png";
import download from "./../../assets/download.png";

import PDF from "react-pdf-js";

function Software() {
  return (
      <div className="software">
        <script>
            window.PUBLIC_URL = "%PUBLIC_URL%"
        </script>
        <div className="title">
            Resume
        </div>
        <div className="subtitle">
            Click the corresponding buttons below to either view my resume in a new window or download it onto your computer!
        </div>
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


        <div className="spacer" />
      </div>
  );
}

export default Software;
